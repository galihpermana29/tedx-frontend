import Image from 'next/image';

function MainEventSpeakersCarouselMobile() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* speaker 1 */}
      <div className="w-[87%] sm:w-[80%] md:w-[50%] flex flex-col shrink-0 gap-5">
        <div className="bg-green-primary w-full shrink-0 aspect-[3/4] p-5 relative">
          <div className="w-full group overflow-hidden relative h-full">
            <span className="linux-libertine-slanted p-2 bottom-0 text-outline-red italic text-lg font-bold absolute text-center w-full z-[1]">
              “The World of Pictolo: Alter Ego”
            </span>
            <Image
              src={'/assets/images/speaker-main-watoni.png'}
              alt="roots"
              fill
              className="object-cover object-top"
            />
            <div className="-bottom-full text-sm linux-libertine-slanted italic  text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
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

      {/* speaker 2 */}
      <div className="shrink-0 w-[87%] sm:w-[80%] md:w-[50%] flex flex-col gap-5">
        <div className="bg-green-primary w-full aspect-[3/4] p-5 relative">
          <div className="w-full group overflow-hidden relative h-full">
            <span className="linux-libertine-slanted p-2 bottom-0 text-outline-red italic text-lg font-bold absolute text-center w-full z-[1]">
              “Keseimbangan Psikologis di Era Modern. Menerobos Stigma dan
              Pseudoscience”
            </span>
            <Image
              src={'/assets/images/speaker-main-ayu.png'}
              alt="roots"
              fill
              className="object-cover scale-105"
            />
            <div className="-bottom-full text-sm linux-libertine-slanted italic text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Masyarakat kerap menganggap bahwa kesehatan mental yang buruk atau
              menurun memiliki keterkaitan dengan kurangnya kadar keimanan atau
              “kegilaan” / “sakit jiwa”. Ayu memantik baskaranya dengan cara
              mengedukasi anak, remaja, dan orang tua untuk lebih sadar mengenai
              pentingnya menjaga kesehatan mental dan mengenali tanda-tanda
              permasalahan yang mungkin sedang dialami oleh para anak atau
              remaja.
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
      <div className="shrink-0 w-[87%] sm:w-[80%] md:w-[50%] flex flex-col gap-5">
        <div className="bg-green-primary w-full aspect-[3/4] p-5 relative">
          <div className="w-full group overflow-hidden relative h-full">
            <span className="linux-libertine-slanted p-2 bottom-0 text-outline-red italic text-lg font-bold absolute text-center w-full z-[1]">
              ”Spektator Menjadi Aktor: Mengoyak Tirai Keterbatasan”
            </span>
            <Image
              src={'/assets/images/speaker-main-ian.png'}
              alt="roots"
              fill
              className="object-cover object-top"
            />
            <div className="-bottom-full text-sm linux-libertine-slanted italic text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Seringkali kita membenamkan diri dalam mentalitas tontonan, yang
              membutakan pandangan dari eksplorasi inti sejati diri. Pada
              panggung talks kali ini, Ian Hugen akan menjembatani kita untuk
              memvisualisasikan batas-batas yang ternyata mampu dilampauinya. Ia
              mengajak kita untuk menyadari betapa pentingnya mengambil alih
              kendali atas takdir dan hidup kita, serta untuk menjauhi sikap
              acuh tak acuh dalam menentukan pilihan sebagai insan yang berani
              berdiri tegak dalam hidup yang mengalir dengan segala keunikan,
              kemajemukan, dan keindahannya.
            </div>
          </div>
        </div>
        <div>
          <h3 className="rosela text-3xl">Ian Hugen</h3>
          <p className="linux-libertine-slanted italic font-bold">Penulis</p>
        </div>
      </div>
      {/* speaker 4 */}
      <div className="w-[87%] sm:w-[80%] md:w-[50%] flex flex-col shrink-0 gap-5">
        <div className="bg-green-primary w-full shrink-0 aspect-[3/4] p-5 relative">
          <div className="w-full group overflow-hidden relative h-full">
            <span className="linux-libertine-slanted p-2 bottom-0 text-outline-red italic text-lg font-bold absolute text-center w-full z-[1]">
              “Melayani dengan belas kasih”
            </span>
            <Image
              src={'/assets/images/speaker-main-yudhono.png'}
              alt="roots"
              fill
              className="object-cover object-top"
            />
            <div className="-bottom-full text-sm linux-libertine-slanted italic  text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Pada talks ini, Yudhono Witanto akan mengajak kita melakukan
              ekspedisi dalam menemukan pandangan baru tentang bagaimana
              seseorang dapat berkontribusi kepada sekitar melalui tekad dan
              belas kasih untuk melayani sebagai Katalis yang tertanam dalam
              diri dengan merobohkan tembok eksklusivitas sehingga semua orang
              dapat merasakan dan mendapatkan kesempatan yang sama dalam
              mengeksplorasi potensi diri masing-masing insan.
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

      {/* speaker 5 */}
      <div className="shrink-0 w-[87%] sm:w-[80%] md:w-[50%] flex flex-col gap-5">
        <div className="bg-green-primary w-full aspect-[3/4] p-5 relative">
          <div className="w-full group overflow-hidden relative h-full">
            <span className="linux-libertine-slanted p-2 bottom-0 text-outline-red italic text-lg font-bold absolute text-center w-full z-[1]">
              “Merayakan Keunikan Penerimaan Diri sebagai Revolusi Martabat
              Manusia”
            </span>
            <Image
              src={'/assets/images/speaker-main-diva.png'}
              alt="roots"
              fill
              className="object-cover scale-105"
            />
            <div className="-bottom-full text-sm linux-libertine-slanted italic text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Dalam jiwa manusia, tersimpan kisah unik. Perjumpaan dengan
              penerimaan diri seorang insan didasarkan pada martabat diri yang
              melekat, bahwa manusia adalah misteri yang mendalam. Penerimaan
              martabat menjadi kekuatan yang tumbuh, menjadi tekad yang abadi.
              Pada talks kali ini, kita akan menilik lebih dalam keunikan
              labirin kecemasan insan dan martabat diri yang tak akan pudar oleh
              cela menuju cinta diri tanpa batasan.
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

      {/* speaker 6 */}
      <div className="shrink-0 w-[87%] sm:w-[80%] md:w-[50%] flex flex-col gap-5">
        <div className="bg-green-primary w-full aspect-[3/4] p-5 relative">
          <div className="w-full group overflow-hidden relative h-full">
            <span className="linux-libertine-slanted p-2 bottom-0 text-outline-red italic text-lg font-bold absolute text-center w-full z-[1]">
              ”Warita Masa Kini: Mengatasi Titik Nadir”
            </span>
            <Image
              src={'/assets/images/speaker-main-andini.png'}
              alt="roots"
              fill
              className="object-cover object-top"
            />
            <div className="-bottom-full text-sm linux-libertine-slanted italic text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              Pada talks kali ini, Andini Effendi akan membawa kita menuju
              keunikan perjalanannya dalam membedah cara pandang dan pemahaman
              akan realitas bahwa kita adalah manusia yang memiliki kemampuan
              luar biasa, dan di sisi lain, juga memiliki kerentanan yang tak
              terelakkan. Namun dengan segala keunikannya, kita sebagai insan
              mampu saling terkoneksi satu sama lain dalam mengatasi masalah
              bersama.
            </div>
          </div>
        </div>
        <div>
          <h3 className="rosela text-3xl">Andini Weningtyas E.</h3>
          <p className="linux-libertine-slanted italic font-bold">Jurnalis</p>
        </div>
      </div>

      {/* speaker 7 */}
      <div className="shrink-0 w-[87%] sm:w-[80%] md:w-[50%] flex flex-col gap-5">
        <div className="bg-green-primary w-full aspect-[3/4] p-5 relative">
          <div className="w-full group overflow-hidden relative h-full">
            <span className="linux-libertine-slanted p-2 bottom-0 text-outline-red italic text-lg font-bold absolute text-center w-full z-[1]">
              “.....”
            </span>
            <Image
              src={'/assets/images/speaker-main-irza.png'}
              alt="roots"
              fill
              className="object-cover object-top"
            />
            <div className="-bottom-full text-sm w-full linux-libertine-slanted italic text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
              ....
            </div>
          </div>
        </div>
        <div>
          <h3 className="rosela text-3xl">Irza Khurun’in</h3>
          <p className="linux-libertine-slanted italic font-bold">Dosen UB</p>
        </div>
      </div>
    </div>
  );
}

export default MainEventSpeakersCarouselMobile;
