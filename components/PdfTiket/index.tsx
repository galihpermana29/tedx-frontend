'use client';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
// Register font
Font.register({
  family: 'Helvetica',
  src: '../../public/fonts/CreatoDisplay-Black.ttf',
});

const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: '100%',
  },
  detailAudiens: {
    marginTop: '20px',
    flexDirection: 'column',
    gap: '5px',
  },
  invoiceTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  totalInvoice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    marginTop: 10,
    borderTop: '1px solid #E3EBF6',
    paddingTop: 10,
  },
  greetingWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 30px',
    marginTop: 30,
  },
  baskara: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 30px',
    marginTop: 10,
  },
  tatacara: {
    flexDirection: 'column',
    padding: '0 30px',
    gap: '5px',
  },
  biodata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 30px',
  },
  barcode: {
    width: 180,
  },
  closingWrapper: {
    padding: '0 30px',
    marginTop: '5%',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 600,
    fontStyle: 'bolder',
    fontFamily: 'Helvetica',
    textAlign: 'justify',
  },
  heading: {
    fontSize: 22,
    color: '#07779A',
    margin: '30px 0 15px 0',
    fontWeight: 700,
  },

  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#E3EBF6',
    margin: '30px 30px',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableRowHeader: {
    margin: 'auto',
    flexDirection: 'row',
    backgroundColor: '#E3EBF6',
  },
  tableCol: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#E3EBF6',
  },
  tableColClass: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#E3EBF6',
    padding: '10px',
  },
  tableColHeader: {
    width: '20%',
    padding: '10px 0',
  },
  tableColHeaderClass: {
    width: '40%',
    padding: '10px 0',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
    padding: '10px 10px',
  },

  totalWrapper: {
    flexDirection: 'row',
    gap: '20px',
  },
  wrapperText: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
  },

  footers: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const InvoicePDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image
            src={
              'https://res.cloudinary.com/dpcwbnax4/image/upload/v1700058569/bg-pdf_jen4hf.png'
            }
          />
        </View>
        <View style={styles.wrapperText}>
          <View style={styles.greetingWrapper}>
            <Text style={styles.paragraph}>Tiket Event</Text>
            <Text style={styles.paragraph}>
              Memantik Baskara | TEDxUniversitasBrawijaya
            </Text>
            <Text style={styles.paragraph}>3 Desember 2023</Text>
          </View>

          <View style={styles.baskara}>
            <View style={styles.detailAudiens}>
              <Text style={styles.paragraph}>MEMANTIKBASKARA-20/B2</Text>
              <Text style={styles.paragraph}>Detail Audiens</Text>
            </View>
          </View>

          <View style={styles.biodata}>
            <View style={styles.detailAudiens}>
              <Text style={styles.paragraph}>Nama: Galih Permana</Text>
              <Text style={styles.paragraph}>
                Nomor Identitas: 205150301111034
              </Text>
              <Text style={styles.paragraph}>
                Email: ygalihpermana@student.ub.ac.id
              </Text>
              <Text style={styles.paragraph}>No Telpon: 089621490655</Text>
              <Text style={styles.paragraph}>
                Jenis Tiket: Early Bird Tiket
              </Text>
            </View>
            <View style={styles.barcode}>
              <Image
                src={
                  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={https://instagram.com/galjhpermana}'
                }
              />
            </View>
          </View>

          <View style={styles.tatacara}>
            <Text style={styles.paragraph}>Tata Cara Penukaran Tiket:</Text>
            <View>
              <Text style={styles.paragraph}>
                1. Silahkan kunjungi entrance gate dan tunjukan unique barcode
                yang telah kamu dapatkan untuk di-scan oleh panitia yang
                bertugas;
              </Text>
              <Text style={styles.paragraph}>
                2. Setelah unique barcode terverifikasi, kamu akan mendapatkan
                wristband dan juga TEDx Kit ;
              </Text>
              <Text style={styles.paragraph}>
                3. Panitia yang bertugas akan mengarahkanmu untuk menempati
                kursi yang telah tersedia;
              </Text>
              <Text style={styles.paragraph}>
                4. Jika tiket kamu digunakan oleh orang lain, orang tersebut
                harus menunjukan bukti berupa foto kartu identitas (nama yang
                tertera pada kartu identitas harus sesuai dengan yang tertera
                pada e-ticket).
              </Text>
              <Text style={styles.paragraph}>
                5. Penukaran tiket hanya dapat dilakukan pada sesi open gate
                yakni pukul 09.00 - 10.00 WIB. Jika audiens datang setelah sesi
                tersebut berakhir, maka otomatis tiket yang dimiliki audiens
                akan hangus dan audiens dilarang untuk memasuki venue acara.
              </Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.footers}>
          <Image
            src={
              'https://res.cloudinary.com/dpcwbnax4/image/upload/v1700058605/image_26_qxrran.png'
            }
          />
        </View> */}
      </Page>
    </Document>
  );
};

export default InvoicePDF;
