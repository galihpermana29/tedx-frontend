import Image from 'next/image';

export default function MainEvent() {
  return (
    <div className="bg-main-event bg-cover py-20 overflow-hidden min-h-[1000vh] relative">
      <div className="absolute bg-green-main bg-no-repeat min-h-[150vh] left-0 right-0 bg-center bg-auto top-[-4%]" />
      <div className="relative z-10">
        <div>
          <Image
            className="w-full "
            src={'/assets/images/red-text.png'}
            width={3000}
            height={4000}
            alt="green"
          />
        </div>
        <div className="rosela text-[96px] font-[400] text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Hadir Untukmu
        </div>
      </div>
      <div className="absolute top-[2%] left-0 right-0">
        <Image
          className="w-full "
          src={'/assets/images/star-main.png'}
          width={3000}
          height={4000}
          alt="green"
        />
      </div>
      <div className="absolute top-[6%] left-0 right-0 flex justify-center">
        <Image
          className="w-[300px] "
          src={'/assets/images/jam-main.png'}
          width={1000}
          height={300}
          alt="green"
        />
      </div>
      <div className="mt-[25%] text-center">
        <div className="rosela text-[40px] font-[400] text-white">
          Memantik Baskara:
        </div>
        <div className="text-[64px] font-[400] text-white rosela">
          Tersulut Tak Membara, <br />
          Terbakar Tak Bersuara
        </div>

        <div className="flex items-center px-[100px] gap-[20px] mt-[100px]">
          <div className="creato text-[20px] font-[400] text-start text-white flex-1">
            Penantian akan segera berakhir. Di puncak acara
            TEDxUniversitasBrawijaya 2023, kami menghadirkan “Memantik Baskara:
            Tersulut Tak Membara, Terbakar Tak Bersuara”. Beberapa insan yang
            berjuang di tengah ambiguitas atas jati dirinya hingga akhirnya
            memantik sebuah pencerahan maupun melahirkan gagasan baru yang
            berkembang dari serangkaian variabel yang saling terhubung. <br />{' '}
            <br /> Era dunia saat ini menuju era inovasi dan kolaborasi, di mana
            ide dan sumber daya dapat dibagikan secara global untuk mencapai
            tujuan yang lebih besar. Dengan potensi yang ada, pelibatan alam,
            sesama, dan entitas manusia bersama berusaha untuk membaca,
            memahami, meneliti, dan menghayati fenomena-fenomena dalam upaya
            penerimaan diri seutuhnya.
          </div>
          <iframe
            className="flex-1 min-h-[430px]"
            src="https://www.youtube.com/embed/EpnSSyRlXvo?si=nEeJrW1TEKYTKQiS&amp;controls=0"
            title="Semayam Asa Teaser YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="flex justify-end px-[100px] mt-[100px]">
          <div className="creato text-[20px] font-[400] text-start text-white max-w-[50%]">
            Dalam pencarian kali ini, audiens akan dibawa ke dalam perjalanan
            menarik melalui instalasi interaktif yang dipadukan dengan panggung
            inspiratif yaitu talks, oleh para speaker TEDxUniversitasBrawijaya
            2023 yang akan menjadikan sebuah pengalaman tak terlupakan, merajut
            satu cerita, dan berjalan bersama.
          </div>
        </div>
      </div>
    </div>
  );
}
