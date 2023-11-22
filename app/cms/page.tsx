'use client';
import WebsiteAPI from '@/api/website';
import { Data } from '@/utils/interface';
import { Button, Modal, Select, Spin, Table, message } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CMS() {
  const [loading, setLoading] = useState<boolean>(false);
  const [datas, setDatas] = useState<Data[] | null>(null);
  const [query, setQuery] = useState<string | null>(null);

  const [active, setActive] = useState<{
    id: number;
    image_uri: string;
  } | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loadingApprove, setLoadingApprove] = useState<boolean>(false);

  const columns = [
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'No Telp',
      dataIndex: 'nomor_telepon',
      key: 'nomor_telepon',
    },
    {
      title: 'Total Harga',
      dataIndex: 'total_harga',
      key: 'total_harga',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Disabilitas',
      dataIndex: 'disabilitas',
      key: 'disabilitas',
    },
    {
      title: 'Detail',
      dataIndex: '',
      key: 'id',
      render: (data: Data) => (
        <Button
          onClick={() => {
            setActive({ id: data.id, image_uri: data.image_uri });
            setIsModalOpen(true);
          }}>
          Detail
        </Button>
      ),
    },
  ];

  const getAllTrans = async () => {
    try {
      setLoading(true);
      const data = await WebsiteAPI.getAllTransactionMainEvent(query);
      setDatas(data.data);
    } catch (error) {
      console.log(error, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleOk = async () => {
    try {
      setLoadingApprove(true);
      await WebsiteAPI.editTransactionByIdMainEvent(active.id, {
        status: 'settlement',
      });
      getAllTrans();
      setIsModalOpen(false);
      message.success('Data updated!');
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingApprove(false);
    }
  };

  useEffect(() => {
    getAllTrans();
  }, [query]);

  return (
    <div className="p-[50px] bg-wall-texture overflow-hidden lg:px-[100px] lg:pb-[200px] xs:p-[20px] min-h-screen">
      <Modal
        title="Payment Approval"
        okText={'Approve'}
        okButtonProps={{
          className: 'bg-red-500',
        }}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleOk}>
        <div className="mt-[10px]">
          {loadingApprove && <Spin />}
          {!loadingApprove && (
            <Image
              className="w-full"
              alt="bukti"
              src={active?.image_uri}
              width={100}
              height={100}
              loader={() => active?.image_uri}
            />
          )}
        </div>
      </Modal>
      <div className="bg-white rounded-md mt-[100px] p-10 min-h-[80vh]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[32px] font-[600] text-black my-[20px] text-red-500">
              All Ticket Transactions
            </h1>
          </div>
          <div>
            <Select
              defaultValue="All"
              style={{ width: 200 }}
              onChange={(val) => setQuery(val === '' ? null : `?type=${val}`)}
              options={[
                { value: 'early-bird', label: 'Early Bird' },
                { value: 'pre-sale', label: 'Pre Sale' },
                { value: 'normal', label: 'Normal' },
                { value: '', label: 'All' },
              ]}
            />
          </div>
        </div>
        <div>
          <Table
            scroll={{
              x: 1500,
            }}
            pagination={{ pageSize: 10, total: datas?.length }}
            loading={loading}
            dataSource={datas}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
}
