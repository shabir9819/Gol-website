import React from "react";
import {
  about_lakshadweep_img1,
  about_lakshadweep_map_img1,
  reservation__hero,
} from "../../assets/images/images";
import { ocean__video } from "../../assets/videos/videos";

export default function About_Lakshadweep_Page() {
 



  return (
    <section id="about_lakswadweep_page">
      <div className="reservation__video w-full h-[calc(100vh-75vh)] md:h-[calc(100vh-35vh)] relative">
        <video
          src={ocean__video}
          
          alt="reservation__hero"
          className="ocean__video w-full h-full object-cover opacity-[0.95] "
          
          type="video/mp4"
          frameborder="0"
          allowfullscreen
          autoPlay
          loop
          muted
        
        />
        <div className="absolute w-full  top-[20%] text-center z-30">
          <h2 className="text-[34px] md:text-[44px] text-[white] leading-[62px] font-bold capitalize">
            about lakshadweep
          </h2>
        </div>
      </div>
      <div className="text-[#525252] text-[18px] leading-[26px] w-full relative px-4 py-4 md:px-20 lg:px-28 md:py-16">
        <p className="para1 mb-3">
          Lakshadweep Islands commonly known as coral paradise of India, a group
          of islands which is scattered in the Arabian Sea. This is one of the
          world's most spectacular tropical island systems, Lakshadweep is
          tucked away at 220-440Kms off cost of Kerala State of the Indian
          Peninsula. This archipelago consists of 36 sun-kissed islands
          comprises of 12 atolls, three reefs, five submerged banks and ten
          inhabited islands fringed by beautiful coral reefs and exotic marine
          life. The islands offer a precious heritage of ecology and culture.
          The unique feature of the Islands is its coral reef, making it a
          pristine leisure spot to come back. 4200 sq. kms of lagoon, rich in
          marine wealth, is spread over 36 islands in an area of 32 sq. kms.
        </p>
        <p className="para2 mb-3">
          The underwater view at Lakshadweep is kaleidoscopic and breathtaking.
          Each island is fringed by snow white coral sands. The crystal clear
          water and the abundant marine life enhance the beauty of these
          islands. Against the vast expanse of the blue sea, the island looks
          like emeralds. The huge shallow calm lagoon on one side with wall like
          reef made of marine live coral boulders blocks the incoming swells of
          the outer sea.
        </p>

        <h4 className="text-[18px] font-semibold">Explore islands</h4>
        <div className="w-full grid place-content-center my-4">
          <img
            src={about_lakshadweep_img1}
            alt="about_lakshadweep_img1"
            className="w-[558px] h-[418px]"
          />
        </div>
        <p className="para3 mb-3">
          The pristine beauty, white sandy beaches, crystal clear water, shallow
          lagoon, rich marine wealth, pollution free environment, variety of
          coral eco system, flora & fauna and water sports activities like,
          scuba diving, snorkeling, wind surfing, water skiing, para sailing,
          sailing boats, speed boats makes Lakshadweep as one of the most
          popular holiday destination for tourists both domestic as well as
          foreign.
        </p>
        <p className="para4 mb-3">
          Lakshadweep is the tiniest Union Territory of India and is its only
          coral island chain. The islands have a total area of 32 sq.kms and the
          lagoons enclosed by the atolls cover an area of 4200 sq.kms. Its
          territorial waters extend to 20,000 sq.kms and Exclusive Economic Zone
          (EEZ) to 4,00,000 sq.kms. Only 10 of these islands namely, Agatti,
          Amini, Andrott, Bitra, Chetlat, Kadmat, Kalpeni, Kavaratti, Kiltan and
          Minicoy are inhabited. Kavaratti is the Administrative Headquarters of
          the Union Territory. It is culturally very close to the nearest
          mainland Indian state of Kerala and Malayalam is a widely spoken
          language apart from local dialects. Minocy Island has a different
          language by the name Mahl.
        </p>
        <p className="para5 mb-3">
          Early history of Lakshadweep is unwritten. Local traditions attribute
          the first settlement on these islands to the period of Cheraman
          Perumal, the legendary king of Kerala. Though it is commonly believed
          that the first settlers in these islands were the ship-wrecked sailor
          who had set out to Mecca in search of Cheraman Perumal, the legendary
          king of Kerala, studies are being continued about the settlement.
        </p>
        <div className="w-full grid place-content-center my-4">
          <img
            src={about_lakshadweep_map_img1}
            alt="about_lakshadweep_map_img1"
            className="w-[558px] h-[687px]"
          />
        </div>
        <p className="para6 mb-3">
          Earlier, life in these Islands was hard and challenging. Foreign
          traders and travellers held sway in these islands to explore it’s
          natural beauty. Quite often the islanders were subject to their savage
          cruelties. The events in these geographically isolated islands were
          never known to the outside world.
        </p>
        <p className="para7 mb-3">
          On 1st November 1956, the group of Islands was declared as a Union
          Territory. In 1973, the island group was renamed as the Union
          territory of Lakshadweep. The islands are restricted area and permit
          from the Administration is required to visit the islands. However
          permit formalities of bonafide tourist are taken care by the
          Lakshadweep Administration.
        </p>
        <p className="para8 mb-3">
          Fishing and coconut cultivation are the only major industries that
          exist in the islands. Almost everything else is sourced from the
          mainland in Kerala or Karnataka. The islands have a high literacy rate
          of 92.1% which implies that local resources are available in abundance
          if opportunities are presented to them. Tourism, undoubtedly, has the
          highest potential to provide opportunities to people with the
          luxurious coral beaches and marine wealth.
        </p>
        <p className="para9 mb-3">
          The climate of these Islands are similar to the climatic conditions of
          Kerala. The islands are linked to the mainland by ship, helicopter,
          flight, and mechanized sailing wooden vessels. Air India operates
          daily service from Cochin to Agatti Island and government owned ships
          are operating from Cochin and Calicut to Islands. BSNL and Airtel
          provide connectivity in the islands. BSNL is a provider in all 10
          islands while Airtel covers Kavaratti and Agatti islands.
        </p>
        <p className="para10 mb-3">
          People of Lakshadweep are extremely friendly and always ready to
          welcome their guests with a smile. They are highly courteous and
          humble people following a simple lifestyle which can be envious to
          city dwellers.
        </p>
        <p className="para11 mb-3">
          The islands of Lakshadweep are truly a paradise on Earth. The islands
          are still virgin with all the natural glory that the group of coral
          islands has to offer. This makes it a perfect holiday destination to
          unwind from daily stress due to the mad rush to stay ahead in this
          highly competitive world that we are living in today.{" "}
          <span className=" font-bold">
            {" "}
            Our mission is to make this process as easy as possible so that more
            tourists can have the pleasure of experiencing the exotic beauty
            that the islands have to offer.
          </span>
        </p>
        <p className="para12 mb-3">
          The white sandy beaches are a treat to anyone’s mind and body. The
          islands having a virgin beauty can be ranked among some of the most
          beautiful beaches in the world. Marine resource is rich in corals and
          fishes and is home to many exotic species of fishes and animals. The
          islands are totally free from poisonous or dangerous animal species
          like snakes and crocodiles making them even more tourist-friendly.
        </p>
        <p className="para13 mb-3">
          Lakshadweep islands offer exotic facilities and in various forms to
          suite various needs of tourists. It offers tents, huts, cottages and
          even sophisticated getaways in the islands. Scuba Diving/Snorkeling is
          a major attraction due to the rich marine life and the flora and fauna
          that the coral islands have to offer.
        </p>
        <div>
          <ol className=" list-decimal ml-10 my-2">
            <div className="my-3">
              The island offers numerous activities for adults and children
              alike as listed below.
            </div>
            <li>Scuba diving</li>
            <li>Snorkeling</li>
            <li>Windsurfing</li>
            <li>Parasailing</li>
            <li>Water skiing</li>
            <li>Glass bottom boating</li>
            <li>Kayaking</li>
            <li>Banana boat</li>
            <li>Jet ski water scooter</li>
            <li>Fishing</li>
            <li>Boating</li>
            <li>Turtle watch</li>
            <li>Shipwreck snorkeling</li>
            <li>Island excursion</li>
            <li>Candle light dinner</li>
            <li>Ayurveda massage</li>
          </ol>
        </div>
        <p className="para15 mb-3">
          Every resort has their own set of water sports and other related
          leisure activities to offer their guests. However, these facilities
          are also open to tourists outside the resorts too. This can include
          even home stay guests. Even though priority will be given to those who
          stay in the resorts, the resorts always find a way to accommodate
          outside guests in the best way possible.
        </p>
        <p className="para16 mb-3">Welcome to coral paradise of India.</p>
      </div>
    </section>
  );
}
