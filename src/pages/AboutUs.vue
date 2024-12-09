<template>
    <q-page class="q-pa-md about-us-page">
      <q-card flat bordered class="about-us-card">
        <!-- Title Section -->
        <q-card-section class="title-section">
          <h1>About Us</h1>
        </q-card-section>
  
        <!-- History Section -->
        <q-card-section class="history-section">
          <h2>History of DTC</h2>
          <p>
            Government of India, Ministry of Transport took over the local bus services of Delhi in May 1948 in the name
            of Delhi Transport Service when they found that the services offered by Gwalior and Northern India Transport
            Company Ltd., the then licensee, were inadequate. A Delhi Road Transport Authority was constituted under the
            Road Transport Corporation Act, 1950. This Authority became an undertaking of the Municipal Corporation of
            Delhi by an Act of Parliament in April 1958.
          </p>
          <p>
            On the recommendation of a Working Group of Planning Commission, which concluded that Delhi Transport, as an
            extension of Municipal Corporation of Delhi, had not been functioning efficiently and adequately, resulting in
            leakage of revenue and very high operation cost, Govt. of India took over the management of the undertaking by
            passing the Delhi Road Transport Laws (Amendment) Act, in 1971. It took over the assets and liabilities from
            the erstwhile Delhi Transport Undertaking (DTU) operated by the Municipal Corporation of Delhi till 2nd Nov,
            1971. Thus the DTC was set up in 1971.
          </p>
          <p>In section 22 of the Road Transport Corporation Act, 1950, the following objectives were laid down for the DTC:</p>
          <q-list bordered>
            <q-item>
              <q-item-section>
                To provide or secure or promote an efficient, economical, reliable, and properly coordinated system of
                road transport in Union Territory of Delhi and any extended area.
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>In doing so, it shall act on business principles.</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>To achieve a high level of operational efficiency.</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                To charge fares not exceeding those prescribed by the State Under Section 43(1)(i) of the Motor Vehicle
                Act, 1939.
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>To attain financial self-sufficiency.</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                DTC, which was functioning under the administrative control of Govt. of India, was finally taken over by
                Govt. of NCT, Delhi on 05.08.1996.
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
  
        <!-- Services Section -->
        <q-card-section class="services-section">
          <h2>Services</h2>
          <p>
            DTC has an extensive network of bus routes spread all over Delhi. A few routes also go into the neighboring
            cities of Noida, Ghaziabad, Gurgaon, and Faridabad. As of June 2023, of the 606 total bus routes in Delhi, 259
            were operated by DTC, 209 were operated by DIMTS, and 138 routes were operated by both authorities under the
            Department of Transport's 'Unified Time Table'.
          </p>
          <p>
            These routes are serviced by 7,135 buses, with 4,088 of them under DTC, out of 37 depots and 3 ISBTs. The
            average number of trips in FY 2021-22 was 31,084 per day. The number of routes being operated by the
            corporation has been steadily falling over the years under the Delhi government's policy of a 50:50 ratio of
            DTC buses and cluster buses on every route.
          </p>
          <p>
            DTC also provides various other services like night services, tourist services, and airport express services.
            It also provides buses to Delhi Police and used to do so for some schools (however, this was stopped in July
            2022).
          </p>
        </q-card-section>
  
        <!-- Depots Section -->
        <q-card-section class="depots-section">
          <h2>Depots</h2>
          <p>
            DTC operates its buses from 37 bus depots categorized into 4 regions: East, North, South & West. Each region is
            headed by a Regional Manager, and each depot is headed by a Depot Manager. 36 of these depots are located in
            Delhi, with 1 located in the neighboring city of Noida. These facilities perform regular maintenance and
            cleaning of buses. To complement DTC's existing depots, the Delhi government is constructing 9 new bus depots
            at Kirari, East Vinod Nagar 2, Narela, Daurala, Burari, Savda Ghevra, Kapashera, Gadaipur, and Chattarpur.
          </p>
        </q-card-section>
  
        <!-- Fact Section -->
        <q-card-section class="fact-section">
          <h2>Fact</h2>
          <p>
            As of September 2023, DTC has a fleet of 4,088 buses, with 3,288 CNG buses and 800 electric buses. This makes
            its fleet the largest CNG bus fleet in the world and the largest electric bus fleet in India. The buses are
            dispatched from 37 bus depots across Delhi. With Delhi having a total of 7,135 buses, this means that 57% of
            these belong to DTC.
          </p>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <style scoped>
  .about-us-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Full-screen height */
    background-color: #f4f4f4;
  }
  
  .about-us-card {
    width: 100%;
    max-width: 1800px;
    margin: 0 1rem;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title-section h1 {
    text-align: center;
    color: #388e3c;
    margin-bottom: 2rem;
  }
  
  h2 {
    text-align: center;
    color: #388e3c;
    margin-bottom: 1rem;
  }
  
  p {
    color: #333;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    text-align: justify;
  }
  
  q-list {
    margin-top: 1rem;
  }
  </style>
  