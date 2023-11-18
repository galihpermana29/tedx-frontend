import Carousel from '@/components/shared/Carousel';
import Image from 'next/image';

function MainEventSpeakersCarouselMobile() {
  return (
    <Carousel hideButton className="cursor-grab active:cursor-grabbing">
      {/* speaker 1 */}
      <div className="w-[87%] sm:w-[80%] md:w-[50%] flex flex-col shrink-0 gap-5 mx-20">
        <div className="bg-green-primary w-full shrink-0 aspect-[3/4] p-5 relative">
          <span className="linux-libertine-slanted italic text-xl font-bold absolute -right-[57%] min-[300px]:-right-[52%] min-[400px]:-right-[45%] min-[500px]:-right-[35%] min-[600px]:-right-[30%] min-[700px]:-right-[30%] min-[800px]:-right-[37%] min-[900px]:-right-[32%] top-32 -rotate-90">
            “Melayani dengan belas kasih”
          </span>
          <div className="w-full group overflow-hidden relative h-full">
            <Image
              src={'/assets/images/speaker-main-1.png'}
              alt="roots"
              fill
              className="object-cover object-top"
            />
            <div className="-bottom-full linux-libertine-slanted italic  text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Pada talks ini, Yudhono Witanto akan memberikan suatu pandangan
              baru tentang bagaimana seseorang dapat berkontribusi kepada
              sekitar melalui tekad dan perasaan belas kasih untuk melayani
              sebagai Katalis yang tertanam dalam diri sehingga semua orang
              dapat merasakan dan mendapatkan kesempatan yang sama untuk tanpa
              ada batasan sama sekali.
            </div>
          </div>
        </div>
        <div>
          <h3 className="rosela text-3xl">Yodhono Witanto</h3>
          <p className="linux-libertine-slanted italic font-bold">
            Pengurus Save Street Child Malang
          </p>
        </div>
      </div>

      {/* speaker 2 */}
      <div className="shrink-0 w-[87%] sm:w-[80%] md:w-[50%] flex flex-col gap-5 mr-20">
        <div className="bg-green-primary w-full aspect-[3/4] p-5 relative">
          <span className="linux-libertine-slanted italic text-xl font-bold absolute text-center w-full -right-[65%] min-[400px]:-right-[60%] min-[500px]:-right-[58%] min-[600px]:-right-[58%] min-[700px]:-right-[58%] min-[800px]:-right-[57%] min-[900px]:-right-[57%] top-28 min-[500px]:top-52 -rotate-90">
            “Keseimbangan Psikologis di Era Modern. Menerobos Stigma dan
            Pseudoscience”
          </span>
          <div className="w-full group overflow-hidden relative h-full">
            <Image
              src={'/assets/images/speaker-main-2.png'}
              alt="roots"
              fill
              className="object-cover scale-105"
            />
            <div className="-bottom-full linux-libertine-slanted italic text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Masyarakat kerap menganggap bahwa kesehatan mental yang buruk atau
              menurun harus dikaitkan dengan kurangnya beribadah atau “kegilaan”
              / “sakit jiwa”. Ayu memantik baskaranya dengan cara mengedukasi
              anak, remaja, dan orang tua untuk lebih sadar mengenai pentingnya
              menjaga kesehatan mental dan mengenali tanda-tanda permasalahan
              yang mungkin sedang dialami anak atau remaja.
            </div>
          </div>
        </div>
        <div>
          <h3 className="rosela text-3xl">Ayu Dewanti</h3>
          <p className="linux-libertine-slanted italic font-bold">
            Psikolog Klinis
          </p>
        </div>
      </div>

      {/* speaker 3 */}
      <div className="shrink-0 w-[87%] sm:w-[80%] md:w-[50%] flex flex-col gap-5 mr-20">
        <div className="bg-green-primary w-full aspect-[3/4] p-5 relative">
          <span className="linux-libertine-slanted italic text-xl font-bold absolute -right-[57%] min-[400px]:-right-[45%] min-[500px]:-right-[35%] min-[600px]:-right-[30%] min-[700px]:-right-[30%] min-[800px]:-right-[37%] min-[900px]:-right-[35%] top-36 -rotate-90">
            “The World of Pictolo: Alter Ego”
          </span>
          <div className="w-full group overflow-hidden relative h-full">
            <Image
              src={'/assets/images/speaker-main-3.png'}
              alt="roots"
              fill
              className="object-cover object-top"
            />
            <div className="-bottom-full linux-libertine-slanted italic text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Talks ini fokus pada kreativitas insan dalam menyalurkan ekspresi
              dan membawa pengalaman unik dalam memantik baskara dalam rangka
              merekognisi ekspresi dan menghayati fenomena-fenomena dari
              keterlibatan tersebut yang berikutnya dapat menstimulasikan
              pengetahuan yang ekspansif dengan melibatkan seni sebagai media
              yang aplikatif dan efektif.
            </div>
          </div>
        </div>
        <div>
          <h3 className="rosela text-3xl">Watoni</h3>
          <p className="linux-libertine-slanted italic font-bold">Seniman</p>
        </div>
      </div>

      {/* speaker 4 */}
      <div className="shrink-0 w-[87%] sm:w-[80%] md:w-[50%] flex flex-col gap-5 mr-40">
        <div className="bg-green-primary w-full aspect-[3/4] p-5 relative">
          <span className="linux-libertine-slanted italic text-xl font-bold absolute w-full -right-[65%] min-[400px]:-right-[60%] min-[500px]:-right-[58%] min-[600px]:-right-[58%] min-[700px]:-right-[58%] min-[800px]:-right-[57%] min-[900px]:-right-[57%] text-center  top-32 min-[400px]:top-40 min-[500px]:top-52 -rotate-90">
            “Merayakan Keunikan Penerimaan Diri sebagai Revolusi Martabat
            Manusia”
          </span>
          <div className="w-full group overflow-hidden relative h-full">
            <Image
              src={'/assets/images/speaker-main-4.png'}
              alt="roots"
              fill
              className="object-cover object-top"
            />
            <div className="-bottom-full linux-libertine-slanted italic text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Dalam jiwa manusia, tersimpan kisah unik, tak ada yang sama rasa.
              Perjumpaan dengan penerimaan diri seorang insan, didasarkan pada
              martabat diri yang melekat bahwa manusia adalah misteri yang
              mendalam. Pada talks kali ini, kita akan menilik lebih dalam
              mengenai keunikan labirin kecemasan insan dan bagaimana martabat
              diri tak akan pudar oleh cela menuju cinta diri tanpa batasan.
            </div>
          </div>
        </div>
        <div>
          <h3 className="rosela text-3xl">Diva Suukyi Larasati</h3>
          <p className="linux-libertine-slanted italic font-bold">
            Mahasiswa Universitas Brawijaya
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default MainEventSpeakersCarouselMobile;
