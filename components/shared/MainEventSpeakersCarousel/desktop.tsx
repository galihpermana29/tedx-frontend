import Carousel from '@/components/shared/Carousel';
import Image from 'next/image';

function MainEventSpeakersCarouselDesktop() {
  return (
    <div className="flex flex-col gap-10">
      <Carousel hideButton className="cursor-grab active:cursor-grabbing">
        {/* speaker 1 */}
        <div className=" flex flex-col lg:max-w-md shrink-0 gap-5 mx-20">
          <div className="bg-green-primary w-96 shrink-0 aspect-[3/4] p-5 relative">
            <span className="linux-libertine-slanted italic text-xl font-bold absolute -right-[41%] top-32 -rotate-90">
              “The World of Pictolo: Alter Ego”
            </span>
            <div className="w-full group overflow-hidden relative h-full">
              <Image
                src={'/assets/images/speaker-main-watoni.png'}
                alt="roots"
                fill
                className="object-cover object-top"
              />
              <div className="-bottom-full linux-libertine-slanted italic text-lg text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
                Talks ini fokus pada kreativitas insan dalam menyalurkan
                ekspresi dan membawa pengalaman unik dalam memantik baskara
                dalam rangka merekognisi ekspresi dan menghayati
                fenomena-fenomena dari keterlibatan tersebut yang berikutnya
                dapat menstimulasikan pengetahuan yang ekspansif dengan
                melibatkan seni sebagai media yang aplikatif dan efektif.
              </div>
            </div>
          </div>
          <div>
            <h3 className="rosela text-4xl">Watoni</h3>
            <p className="linux-libertine-slanted text-xl italic font-bold">
              Seniman
            </p>
          </div>
        </div>

        {/* speaker 2 */}
        <div className=" shrink-0 max-w-md flex flex-col gap-5 mt-32 mr-20">
          <div className="bg-green-primary w-96 aspect-[3/4] p-5 relative">
            <span className="linux-libertine-slanted italic text-xl font-bold absolute text-center w-[95%] -right-[55%] top-40 -rotate-90">
              “Keseimbangan Psikologis di Era Modern. Menerobos Stigma dan
              Pseudoscience”
            </span>
            <div className="w-full group overflow-hidden relative h-full">
              <Image
                src={'/assets/images/speaker-main-ayu.png'}
                alt="roots"
                fill
                className="object-cover scale-105"
              />
              <div className="-bottom-full linux-libertine-slanted italic text-lg text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
                Masyarakat kerap menganggap bahwa kesehatan mental yang buruk
                atau menurun memiliki keterkaitan dengan kurangnya kadar
                keimanan atau “kegilaan” / “sakit jiwa”. Ayu memantik baskaranya
                dengan cara mengedukasi anak, remaja, dan orang tua untuk lebih
                sadar mengenai pentingnya menjaga kesehatan mental dan mengenali
                tanda-tanda permasalahan yang mungkin sedang dialami oleh para
                anak atau remaja.
              </div>
            </div>
          </div>
          <div>
            <h3 className="rosela text-4xl">Ayu Dewanti</h3>
            <p className="linux-libertine-slanted text-xl italic font-bold">
              Psikolog Klinis
            </p>
          </div>
        </div>

        {/* speaker 3 */}
        <div className=" shrink-0 max-w-md flex flex-col gap-5 mr-20">
          <div className="bg-green-primary w-96 aspect-[3/4] p-5 relative">
            <span className="linux-libertine-slanted italic text-xl font-bold absolute -right-[67%] top-60 -rotate-90">
              ”Spektator Menjadi Aktor: Mengoyak Tirai Keterbatasan”
            </span>
            <div className="w-full group overflow-hidden relative h-full">
              <Image
                src={'/assets/images/speaker-main-ian.png'}
                alt="roots"
                fill
                className="object-cover object-top"
              />
              <div className="-bottom-full linux-libertine-slanted italic text-lg text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
                Seringkali kita membenamkan diri dalam mentalitas tontonan, yang
                membutakan pandangan dari eksplorasi inti sejati diri. Pada
                panggung talks kali ini, Ian Hugen akan menjembatani kita untuk
                memvisualisasikan batas-batas yang ternyata mampu dilampauinya.
                Ia mengajak kita untuk menyadari betapa pentingnya mengambil
                alih kendali atas takdir dan hidup kita, serta untuk menjauhi
                sikap acuh tak acuh dalam menentukan pilihan sebagai insan yang
                berani berdiri tegak dalam hidup yang mengalir dengan segala
                keunikan, kemajemukan, dan keindahannya.
              </div>
            </div>
          </div>
          <div>
            <h3 className="rosela text-4xl">Ian Hugen</h3>
            <p className="linux-libertine-slanted text-xl italic font-bold">
              Penulis
            </p>
          </div>
        </div>
      </Carousel>
      <Carousel hideButton className="cursor-grab active:cursor-grabbing">
        {/* speaker 4 */}
        <div className=" flex flex-col lg:max-w-md shrink-0 gap-5 mx-20 mt-32">
          <div className="bg-green-primary w-96 shrink-0 aspect-[3/4] p-5 relative">
            <span className="linux-libertine-slanted italic text-xl font-bold absolute -right-[38%] top-32 -rotate-90">
              “Melayani dengan belas kasih”
            </span>
            <div className="w-full group overflow-hidden relative h-full">
              <Image
                src={'/assets/images/speaker-main-yudhono.png'}
                alt="roots"
                fill
                className="object-cover object-top"
              />
              <div className="-bottom-full linux-libertine-slanted italic text-lg text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
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
            <h3 className="rosela text-4xl">Yodhono Witanto</h3>
            <p className="linux-libertine-slanted text-xl italic font-bold">
              Pengurus Save Street Child Malang
            </p>
          </div>
        </div>

        {/* speaker 5 */}
        <div className=" shrink-0 max-w-md flex flex-col gap-5 mr-20">
          <div className="bg-green-primary w-96 aspect-[3/4] p-5 relative">
            <span className="linux-libertine-slanted italic text-xl font-bold absolute text-center w-[95%] -right-[55%] top-40 -rotate-90">
              “Merayakan Keunikan Penerimaan Diri sebagai Revolusi Martabat
              Manusia”
            </span>
            <div className="w-full group overflow-hidden relative h-full">
              <Image
                src={'/assets/images/speaker-main-diva.png'}
                alt="roots"
                fill
                className="object-cover scale-105"
              />
              <div className="-bottom-full linux-libertine-slanted italic text-lg text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
                Dalam jiwa manusia, tersimpan kisah unik. Perjumpaan dengan
                penerimaan diri seorang insan didasarkan pada martabat diri yang
                melekat, bahwa manusia adalah misteri yang mendalam. Penerimaan
                martabat menjadi kekuatan yang tumbuh, menjadi tekad yang abadi.
                Pada talks kali ini, kita akan menilik lebih dalam keunikan
                labirin kecemasan insan dan martabat diri yang tak akan pudar
                oleh cela menuju cinta diri tanpa batasan.
              </div>
            </div>
          </div>
          <div>
            <h3 className="rosela text-4xl">Diva Suukyi Larasati</h3>
            <p className="linux-libertine-slanted text-xl italic font-bold">
              Mahasiswa Universitas Brawijaya
            </p>
          </div>
        </div>

        {/* speaker 6 */}
        <div className=" shrink-0 max-w-md flex flex-col gap-5 mr-20 mt-32">
          <div className="bg-green-primary w-96 aspect-[3/4] p-5 relative">
            <span className="linux-libertine-slanted italic text-xl font-bold absolute -right-[51%] top-44 -rotate-90">
              ”Warita Masa Kini: Mengatasi Titik Nadir”
            </span>
            <div className="w-full group overflow-hidden relative h-full">
              <Image
                src={'/assets/images/speaker-main-andini.png'}
                alt="roots"
                fill
                className="object-cover object-top"
              />
              <div className="-bottom-full linux-libertine-slanted italic text-lg text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
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
            <h3 className="rosela text-4xl">Andini Weningtyas E.</h3>
            <p className="linux-libertine-slanted text-xl italic font-bold">
              Jurnalis
            </p>
          </div>
        </div>

        {/* speaker 7 */}
        <div className=" shrink-0 max-w-md flex flex-col gap-5 mr-40">
          <div className="bg-green-primary w-96 aspect-[3/4] p-5 relative">
            <span className="linux-libertine-slanted italic text-xl font-bold absolute text-center w-[95%] -right-[51%] top-5 -rotate-90">
              “.....”
            </span>
            <div className="w-full group overflow-hidden relative h-full">
              <Image
                src={'/assets/images/speaker-main-irza.png'}
                alt="roots"
                fill
                className="object-cover object-top"
              />
              <div className="-bottom-full w-full linux-libertine-slanted italic text-lg text-center p-5 font-bold text-white flex justify-center items-center h-full z-20 bg-black-primary absolute group-hover:bottom-0 transition-all duration-700">
                ....
              </div>
            </div>
          </div>
          <div>
            <h3 className="rosela text-4xl">Irza Khurun’in</h3>
            <p className="linux-libertine-slanted text-xl italic font-bold">
              Dosen UB
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default MainEventSpeakersCarouselDesktop;
