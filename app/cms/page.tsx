'use client';
import WebsiteAPI from '@/api/website';
// import InvoicePDF from '@/components/PdfTiket';
// import { PDFViewer } from '@react-pdf/renderer';
import { Data } from '@/utils/interface';
import { Button, Modal, Table, message } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CMS() {
  const [loading, setLoading] = useState<boolean>(false);
  const [datas, setDatas] = useState<Data[] | null>(null);

  const [active, setActive] = useState<{
    id: number;
    image_uri: string;
  } | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Status',
      dataIndex: 'status_payment',
      key: 'status_payment',
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
      const data = await WebsiteAPI.getAllTransaction();
      setDatas(data.data);
    } catch (error) {
      console.log(error, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleOk = async () => {
    try {
      await WebsiteAPI.editTransactionById(active.id, {
        status_payment: 'settlement',
      });
      getAllTrans();
      setIsModalOpen(false);
      message.success('Data updated!');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTrans();
  }, []);

  return (
    <div className="p-[50px] bg-wall-texture overflow-hidden lg:px-[100px] lg:pb-[200px] xs:p-[20px] min-h-screen">
      {/* <PDFViewer width={'90%'} height={'1024px'}>
        <InvoicePDF />
      </PDFViewer> */}
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
          <Image
            className="w-full"
            alt="bukti"
            src={active?.image_uri}
            width={100}
            height={100}
            loader={() => active?.image_uri}
          />
        </div>
      </Modal>
      <div className="bg-white rounded-md mt-[100px] p-10 min-h-[80vh]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[32px] font-[600] text-black my-[20px] text-red-500">
              All Ticket Transactions
            </h1>
          </div>
          <div></div>
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
