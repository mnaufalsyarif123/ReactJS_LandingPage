import React, { useState, useEffect, useRef } from 'react';
import { StyledHomeSection, StyledHomeTitle, StyledAbout, StyledRuanganSection, StyledFAQ, StyledKomunitasSection, StyledAlamatSection } from './StyledBody';
import Carousel from "./Carousel";
import AddressMap from './AddressMap';
import throttle from 'lodash/throttle';
import ModalComponent from './ModalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const useResizeObserver = (callback) => {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
        const handleResize = throttle(entries => {
            callbackRef.current(entries);
        }, 100); // Menggunakan throttle dengan 100ms

        const resizeObserver = new ResizeObserver(handleResize);

        const elements = document.querySelectorAll('.observed-element'); // Elemen yang ingin diamati
        elements.forEach(element => resizeObserver.observe(element));

        return () => {
            resizeObserver.disconnect();
        };
    }, []);
};

const Body = () => {

    const [sizes, setSizes] = useState({});
    const ref = useRef(null);

    useResizeObserver(entries => {
        entries.forEach(entry => {
            setSizes({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
            });
        });
    });


    return (
        <div className="content">
            <StyledHomeSection id="home" className="home">
                <div className="context">
                    <StyledHomeTitle>Selamat Datang di IndigoSpace - SDK</StyledHomeTitle>
                    <p className="p-home">
                        Tempat bertemunya para komunitas digital dan UMKM di Kota Semarang Agar dapat berkreasi, berkoneksi, dan berkolaborasi antar komunitas digital.
                    </p>
                </div>
                <Carousel />
            </StyledHomeSection>

            <StyledAbout id="about" className="about">
                <p className="text-p2">Tentang Kami</p>
                <div className="a-container">
                    <p className="p-about">
                        IndigoSpace - SDK merupakan tempat yang disediakan oleh Pemerintah Kota Semarang yang berkolaborasi dengan PT. Telkom untuk pembinaan dan memfasilitasi pengembangan ekosistem digital, termasuk startup, komunitas kreatif, dan UMKM. Selain itu juga untuk melakukan kegiatan nurturing creativity di berbagai industri sehingga dapat dikembangkan ide-ide inovasi digital dengan value yang tinggi sebagai bagian dari proses Transformasi Digital Bangsa Indonesia.
                    </p>
                    <p className="p-about">
                        Pemerintah Kota Semarang bersama PT. Telkom mendorong peran aktif pemuda dalam transformasi digital dan memberikan insentif/ kemudahan berusaha bagi UMKM dan startup serta mempromosikan penggunaan hasil karya startup dan UMKM di tingkat daerah, nasional bahkan global. Selain itu juga menjalankan program Customer Discovery (mendorong para startup founder pemula untuk mengembangkan ide inovasinya) dan Customer Validation (memfasilitasi startup pemula untuk memvalidasi pain problem) serta menyediakan bimbingan berkelanjutan berupa workshop series untuk digitalisasi UMKM non-digital yang juga akan diberikan bimbingan berupa photography, digital marketing, videography, copywriting, packaging, dan lainya
                    </p>
                </div>
            </StyledAbout>

            <StyledRuanganSection id="ruangan" className="produk">
                <h2>Ruangan Tersedia</h2>
                <div className="card-container">
                    <div className="card-link">
                        <div className="card">
                            <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20230201105517-2023-02-01ruangan105125.jpeg" alt="Ruang Start-Up" />
                            <h2>Ruang Start-Up</h2>
                            <p>Ruang untuk berkumpulnya para startup dan komunitas digital dengan kapasitas 30 s/d 50 Peserta. Memiliki fasilitas Meja Kerja dengan 10 komputer Desktop,
                                Meja dan Kursi untuk 10 - 12 Peserta, Akses Wifi Fullspeed Unlimited, TV LED, dan Toilet
                            </p>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal0">
                                Detail Gambar
                            </button>
                            <ModalComponent
                                id="modal0"
                                title="Ruang Start-Up"
                                bodyContent={
                                    <>
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20230201105517-2023-02-01ruangan105125.jpeg" alt="Ruang Start-Up" />
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20220914143936-2022-09-14ruangan143920.jpeg" alt="Ruang Start-Up" />
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20220914143936-2022-09-14ruangan143931.jpeg" alt="Ruang Start-Up" />
                                    </>
                                }
                            />
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20230201104812-2023-02-01ruangan104444.jpeg" alt="Private & Rest Room" />
                            <h2>Private & Rest Room</h2>
                            <p>Ruang Private & Ruang Istirahat dengan Kapasitas 15 Peserta. Memiliki fasilitas Mushola dan Akses Wifi Fullspeed Unlimited</p>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal1">
                                Detail Gambar
                            </button>
                            <ModalComponent
                                id="modal1"
                                title="Private & Rest Room"
                                bodyContent={
                                    <>
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20230201104812-2023-02-01ruangan104444.jpeg" alt="Private & Rest Room" />
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20220926081412-2022-09-26ruangan081402.jpeg" alt="Private & Rest Room" />
                                    </>
                                }
                            />
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20220926084555-2022-09-26ruangan084526.jpeg" alt="Ruang UMKM" />
                            <h2>Ruang UMKM</h2>
                            <p>Ruang UMKM lesehan dengan Kapasitas 25 s/d 30 Peserta. Dapat digunakan untuk Pelatihan, Workshop, Foto Produk, dsb. Memiliki fasilitas Backdrop,
                                Ligthing, Akses Wifi Fullspeed Unlimited, Proyektor/ TV LED, dan Dispenser Free refill air mimum
                            </p>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal2">
                                Detail Gambar
                            </button>
                            <ModalComponent
                                id="modal2"
                                title="Ruang UMKM"
                                bodyContent={
                                    <>
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20220926084555-2022-09-26ruangan084526.jpeg" alt="Ruang UMKM" />
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20220926084555-2022-09-26ruangan084548.jpeg" alt="Ruang UMKM" />
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20220926093240-2022-09-26ruangan093156.jpeg" alt="Ruang UMKM" />
                                    </>
                                }
                            />
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20230201105852-2023-02-01ruangan105844.jpeg" alt="Meeting Room" />
                            <h2>Meeting Room</h2>
                            <p>Ruang Rapat dengan Kapasitas 15 Peserta. Memiliki Fasilitas White Board, Meja dan Kursi, Akses Wifi Fullspeed Unlimited, Proyektor/ TV LED, dan Toilet </p>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal3">
                                Detail Gambar
                            </button>
                            <ModalComponent
                                id="modal3"
                                title="Meeting Room"
                                bodyContent={
                                    <>
                                        <img src="https://indigospacesdk.semarangkota.go.id//uploads/ruangan/20230201105852-2023-02-01ruangan105844.jpeg" alt="Meeting Room" />
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
            </StyledRuanganSection>

            <StyledKomunitasSection id="komunitas" className="komunitas">
                <h2>Komunitas</h2>
                <div className="card-container">
                    <div className="card-link">
                        <div className="card">
                            <img src="data:image/png;base64,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" alt="SANDEC" />
                            <h2>SANDEC</h2>
                            <p>Komunitas Android Developer di Semarang yang memiliki tagline Learn Teach and Grow</p>
                            <a href="https://www.instagram.com/sandec.id/" target="_blank" class="btn btn-outline-danger">Check On Instagram</a>
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="data:image/png;base64,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" alt="PCC" />
                            <h2>PCC</h2>
                            <p>Unit Kegiatan Mahasiswa Polytechnic Computer Club Politeknik Negeri Semarang yang bergerak di bidang teknologi dan komputer.</p>
                            <a href="https://www.instagram.com/pccpolines/" target="_blank" class="btn btn-outline-danger">Check On Instagram</a>
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhIPEAgSERMWFRgWEhYVERkYGBYWFxUWFhUVFhUYKCggGBolHRsTITEhMTUtLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGjUlHyYrLTYvNS03NzcrNystKysuNS8tLTEuMis1LTUtLS0tNSstLS0rLSs1LS0tLS0tLTcrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcCBAUDAQj/xABMEAABAwIDAwkCCQcJCQAAAAABAAIDBBEFEiEGEzEHFCJBUWFxgZGhsRUjMkJScoLC0hZDRVZiosElM1Vkg4SS0fEXNURUY2Wyw+L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAsEQEAAgIBAwIEBQUAAAAAAAAAAQIDEQQFEnEhMjFRkeEUIkGh0RMjQmGB/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARYSOIBIaT3DifVcfFcclgbmGCzyfVLD65ST7FNazM6hza8Vjcu2ig527m/V2f2/hWP5eT/q7N6u/Crvw2T5M/4zD806RQ2l26JNpcFqIx2hhdbysCpbTztkaHtdcEXH+nUq747U90LceamT2y9UXnNIWgkRl57Ba59SAuHjO0MtOARgdRJfsyEeeUk+xRWs2nUOr5K0jcpAigZ2+qP1bm/e/CpRgWKmpgbOaV0ZOboHiCCRbWy7vhvSN2hXj5GO86rLqIuLiuNyQNzDBqiTubkPrZxPsUdk2/mFydnZgO8kfdSmC9/bCL8nHSdWlPEXK2cxR9VCJ30hhzE5Wk3JaNM3AWvqtupqizhA53eC37xC4msxOlsXia936NpFEMS2ykiJYzAKl5HWQLerMy48m3tffTALDvbJf1sFdXi5LRuIZ7c3DWdTKx0Vas5RKsHp4KLdds4PtCn+F1TpomSugMZc0OLCblt+ornLgvj9yzFyceWdVbaLn1mJGME8zkfbqaWXPgC4KLVm3U4No9nJz3vBH/iCophvf2wZOTjx+6U5RVs7b3EP6At9mT/JbOE7d1U0scJwYXc4DRzha/Em44AXKtnh5Yjev3VV5+G06if2WAi+BfVlbBERAREQF8X1ecziAcrMx6he1/PqQa9cSdObOeOPRky+XEKsdp3mWQ5sInbb+u3B8ukApLtZK5kZBweN+bjetLfZpdVrVNa39Fsb4VGb+Ktw8nDindy/S+Vyq/24jXmGzDRbx2SPC5nutfK2oa427bBqzkwCq/oSpb23N/uqf8nGCiGA1DocskuoF+EY+SL9/FbO01NeF2bCI5B2GrMfney2T1GN7iPR5sdJvvsmfzf819dKskw6UcaOQeLx/kptyXVsrXyUzmOyFudtzezgQHDwNwfJQ2eFt/8AdUTfCrv95Sbk2gdziWRtG3oxW0lv8pw69folcZeoYMtJpHx8NGPoXL49v6ttaj/aw8RzEE80e+3DLNkv7QqwxuJ8sjnOwWoGvXWZveCFIdtHyBuT4AEjT87nZH7osVAXw/8AY7f2ziqMPJxYp/N8fH3X5elcrk1iaa15h6y0Dx+jZh/ag/dVgbCudzPIaOU5JHcJQ0668bt7VW00Lm8cHLfFz129n6oinmYMGjku8fKqTERdo4Am54K3N1DDkr2xv6fdzh6Dy8Nu+da8w3tqZ3SyWdhVQMv9cuD5dILj4Pgb6mdkIppGtJu8l4NmjU9Q8PNalTSka/BDW/3nN/FTjYXAnQ07qh1CHPk1aDLkswfJF+/jfwXdOfhik1pvfj7qM3RuTW0Xy61v5wkGK1BhiaG4Y8hgs1rahsegFhwcCVXmMTGd2Z+D1DT2c7c4fvA2WWOh8sji7Z1gPDStzfxXKiw18jxFHgvScbD44keJt1KnBy8FPjvfj7tGfpHMyR6a15j+HlKI28aKZvjMPwL0iwyV+rMJqXDtAJ+4rT2c2NpqUBzoWyS21cRcA9jAeAUltbgFqtz4j2V+rzadNn/O30U3s1s5JLUtbJhkzWss94f0bgcB0gL3NvK6mW0mLPiNm4PK+41Iq8oHcGscSF0dpJJGRueMJZKeBDqnd/wVXVcNyXHAmN8Ky/vcsuTmUteJyenhvwdKzTjmMOp8zEFSxriXHCpwT21Jd7S0lauVhOUYfMSeoS3PplXU2a2fNbLk5iI42/zjxKXWB4NGvEq2MIwOnpW5YaZre11ruPi7iVqjn4u3dImWLJ0nNjv25JiPHqpr4GqCLtwWpt4O/CpvyaYDkzVckD2ON2Rh/ED5zrWFrnTyU/sllRl5tr17daW4eBXHeLb2+oiLG3iIiAiIgFcvFJDY3p4nsA4vnyC/fobLdqpsoNnMDvm53ZQT46qttvMQjYwxmhwN7jq5s04Lr9oZkGvfcImEL2pxcvlcRgNG3qDmYmx9x22uPctfYmmlxCtjpuZxtjHTnc15fljb1XBIu42A8Sepcmo3R/ReFt+pUP8AdvFu7P7S1GHNlbStw9olI3mZxkJsLAXc46cdO8qqcdZncw2V5mete2t50/QeITiKMARxFgFnbyUMaBa1rkEKptstp2Zt3Hsxh8zBwe2vivfuDMpChmKbUSTNyy4Thjh2spWh3k5puuHJVNd0RQRNJ0GQSXueFgXHXyXcwzVtNZ3E+rr1W0oBI+AIGW42qJHj1DrK3tlqSWjoRNNhlKyR43jmvqzHluOgxxe05SBx1OpKi+wHJ/uiysxAwsfo6CnmeB4SSD3N9eq3vyiYtGbQsbgMmuuclz2+gFvVRFKxO9LL8nLeO21pmEax3aJ7pHPOz9ENeLcQz3/wvHuW9yeh+ITPd8EU26hF3B0z2tc43yszHMD2nTqUOe1z3BjKLDnucQ1jYi/VxNgAM3WVfOBbOQ0FLFTupqHPlzSmX50jtX2zX6PUO4J2V+RHJy1jUWlVW0NXJDM5n5O0kevzcRDx7HC3hYLiyYtIf0XAP7xf7y7G11FGyd4FHgTBfQR1D7+bWkAHyCi9S1o/MUH2JHH3uUTjrP6LK8zPEel5SXY2mnxCrZTijiawAyTESXAjb3gmxJLW+d+pWhtm58NMQ3BaJ7bAWfXmOwAsLXa2/hcLLkw2TFHRl8lJGKioaHSNI6IbqY4ze/UbnvK0tu8JEkV24Rgz3N0vLLkLR12IDfS4UxSsfCFeTlZckxN7TOlU1OIPbf8Akykb9WsDv/YpzyIytmqKp72RtkZGzdNa4E2cXZ3A3PYwear6opbEjd4T9iov6dNeVDVTUsgnp6ilhkb8l0c2vePlG47jooilYnenduVmtWazadS/Vi160utZsTHa6h8hYPUA3X58i5VsaJETaqJ7yQ1toGkucTYAW0ve3Urso6OoFLDzt0FROG3mdM1rWhztSG5RYAHTyVjLpAeUiqlD2tOB0LrDR5xIB3hkOQ+9VzV4nI3T4NpWn9mqDvvlTPlCwgB5kZheBRtOpeZ8rieu7bsBPkVApYP2cL+xP/8Aa4tSs/GGjHyctI1W0wv3kobGcNhkZlzPu6XKb/GBxBbfusApgF+XsE2jrsPLuaYhTxNdq5jZGvYSOvI4mx7xYqZ7HbZ43iVXFSjEIWx3zzujiZdsTbZuN7XNm/aXUekahReZtM2tPqu9F8C+qXIiIgIiICIhQc+vhncTkMFvmiSJzjfxDgqz2g2MxiplLzQ4Q7sIhsbd5cCb+a720W0UrampjgxVrHQ83ZFThrHGeeUlzmEEF9shj1Frak8Fz8X21qBBI+GVxc1807iyHeCOmikdHGx2UWbvDHIcx4AO7kSjJ5M8W/5LDP8ACPwr5/sxxY/8LhvoPwKaYhtPVisfCxw3M00dNTODQckrN1JOSbah0b5LX4GErLbDaeqpaiXcjNAyJkTrNBLaqoz83ef2QWsaR/1QhtEIeSCulsJqyjhbcX3cWZ1r9Wjfep5slydUOHkSCMzzDhLLYkH9hg6LfHj3rUj2nkLzBz8GXnro3NDQXx01PHmme5g1DXFjrOt+dbbqXKbtjPHFLK7E98Yn0rpN22N8ZimqQ07l7ACC6O43bgXA2N9UE7xKmqnh26dS3scm9he7wuQ5VZivJ/jM73PfRYPcm92w5fe267cG11cwzsl6UsUrm5GxE5pJo2OpqdoaCXBjTK95GtmDtWbNr6tsVK7emR0RqZK4uiyOfBTSthcclrsd8Y19uPQIQa2wXJxUU1WKqujpbRi8LYW/nDpmOg4C/qrIrqd77ZNz37yMv9LEKG0tfWzOof5UmYZaSSqmY2OLRoLDGwZmkhx3jW/YK57drqnctqGYqyeR9LLLNA1rMtM8ttAy4GYO3hDCHXLiHaC1kGntRsHiVRM58WHYNlPB3N3NefrXvqtXZzktqxVQyVsFCIGHO5sLNXFurWkWGl7ei7UGPV8e9ZNiG6bvoKd0k7Ys8D3tL5ZPiwGbtzTGGE36RN+Fl1qXHqiOhr6kTc6bA5/NZXNA3rGsac7t2AHNa8vGYAXDUE0WhiWGslaW81gdfjvIg8EeGmqh8+PPja1rNp2TsknhhkqDFHlpi+OSR7hI20ZzZY2tBvlLxcm4C0Kja+qiyObWGaBlS74wRtLqmn3kMDQMoDbmWRwDhxEd+tEPDaTk5qHa0WF4QB1h1M9rj5lzm+xQ+fYDGgbfk7Rn6jYbe03U3pcZxWe0UdS58uSokduhC0N+PMNO1xlH83eObUC5AXTptoah8jqY18fODXRwhjQMzIY4on1Dyw6hriJLE9T2qNJ2jvJxye1UNUKuvoaeNsYvC1mUneXsHHLoLC/mVbjmgixAI7Cq4rsaqoo3yjHXOz1xpIM4gYMjD8a/OWgZuhMATpw0K88U2hq2AbqvlexlO6aZ7H0r8pkmEUBe/Lk3QDZS7KLgeCkS3HdnIqrR1BRPb1b6nzm/iCFWmO8m+JBxNPhGEOb1NZAWH0kJ96nuPYrNC2hhmxWOl3ocamos2144sxbFvLtBcbnUHRpWGz+0WepMEuLxyNbTQFhLWxPmkmfK7MIz0gcjY9BxJvZBU55P8aJt+TlIO8NgA9bq0+S/ZB2HQPdPFGKmV15N2BZrW/IjBHG2p8SuPUbbTGmZLFWsdIKapqJrZbRkvEdJDJ9A5n9ep3Tu9d/YLFaiodUtmqxKIjG1pvE7UszP+Mhswjh0eI6+KgS9ERSgREQEREBERBhum3zZBfttr6oImjQMHfos0QYbsfRHG406+3xTdj6I79OxZogwEQuXZRc8TbU+JWLYGi4EbQCbmzRqe1eqIMBGL3yi/Hh18Lpum69Aa8dO3is0QYhg+iOzh1dixELdfi26m50Gp7SvREGDowb3aDfjpx8V9DeqwsskQeQp2Zcm6bl+jYW9OCy3Y+gNOGnZwWaIMGsA4NA8kETb5sgzHQm2tuy6zRB5mBpFjG0jjawtftRsLRoGAdXD2L0RBg+MEWLAR2EXXwwNvm3bSe2wv6r0RB5CBmo3bbHj0Rr49qzYwDQNAHcLLJEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=" alt="DNCC" />
                            <h2>DNCC</h2>
                            <p>Unit Kegiatan Mahasiswa Dian Nuswantoro Computer Club Universitas Dian Nuswantoro Semarang yang berpusat pada bidang ilmu komputer.</p>
                            <a href="https://www.instagram.com/dnccsemarang/" target="_blank" class="btn btn-outline-danger">Check On Instagram</a>
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="https://pbs.twimg.com/profile_images/510261658271232000/EQT3CvVR_400x400.png" alt="DOSCOM" />
                            <h2>DOSCOM</h2>
                            <p>Dinus Open Source Community merupakan sebuah komunitas yang terdiri dari mahasiswa, pelajar dan masyarakat yang aktif dalam penggunaan Open Source Software (OSS).</p>
                            <a href="https://www.instagram.com/doscomedia/?hl=id" target="_blank" class="btn btn-outline-danger">Check On Instagram</a>
                        </div>
                    </div>

                    <div className="card-link">
                        <div className="card">
                            <img src="https://bima.dinus.ac.id/gallery/thumbs/HMILKOM_(1)_(1)_thumb.png" alt="HM ILKOM UDINUS" />
                            <h2>HM ILKOM UDINUS</h2>
                            <p>Himpunan Mahasiswa Ilmu Komunikasi Universitas Dian Nuswantoro</p>
                            <a href="https://www.instagram.com/hmilkomudinus/?hl=id" target="_blank" class="btn btn-outline-danger">Check On Instagram</a>
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/326242377_473695188300806_4759251322403801635_n.png?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KMNZjgsVQjoQ7kNvgFevT4V&_nc_ht=scontent-cgk2-1.xx&oh=00_AYDHa2LghHmaeRWuC-eFOjBQoW8RKlTMlRcs8ryReqMK-Q&oe=666252B8" alt="NAYS" />
                            <h2>NATIONAL YOUTH INSPIRATION</h2>
                            <p>NAYS (National Youth Inspiration) Chapter Semarang</p>
                            <a href="https://www.instagram.com/nays.or.id/" target="_blank" class="btn btn-outline-danger">Check On Instagram</a>
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="data:image/png;base64,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" alt="KEN RUNTAH" />
                            <h2>KEN RUNTAH</h2>
                            <p>Ken Runtah adalah komunitas yang bergerak di bidang kain perca atau yang tidak terpakai lagi untuk dimaanfaatkan sebagai suatu produk yang mempunyai nilai jual/ekonomi</p>
                            <a href="https://www.instagram.com/kenruntah_community/" target="_blank" class="btn btn-outline-danger">Check On Instagram</a>
                        </div>
                    </div>
                    <div className="card-link">
                        <div className="card">
                            <img src="https://bima.dinus.ac.id/gallery/thumbs/HIPMI_UDINUS_LOGO_PNG_thumb.png" alt="HIPMI PT UDINUS" />
                            <h2>HIPMI PT UDINUS</h2>
                            <p>HIMPUNAN PENGUSAHA MUDA PERGURUAN TINGGI UDINUS</p>
                            <a href="https://www.instagram.com/hipmipt_udinus/?hl=id" target="_blank" class="btn btn-outline-danger">Check On Instagram</a>
                        </div>
                    </div>
                </div>
                <p>Dan Komunitas - Komunitas Lainnya</p>
            </StyledKomunitasSection>

            <StyledAlamatSection id="alamat" className="alamat">
                <div className="context">
                    <StyledHomeTitle>Temukan Kami di Maps</StyledHomeTitle>
                    <p className="p-alamat">
                        Jl. Empu Tantular No.2, Bandarharjo, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50175
                    </p>
                </div>
                <AddressMap />
            </StyledAlamatSection>

            {/* <StyledFAQ id="faq" className="faq">
                <p className="text-p2-faq">FAQ</p>
                <div className="f-container">
                    <p className="p-faq">
                        Q: Bagaimana cara memilih film yang ingin ditonton?
                        <br />
                        <span className="f-span">A: Anda dapat menelusuri katalog film kami. Setelah menemukan film yang Anda inginkan, Anda dapat mengakses film tersebut.</span>
                    </p>
                    <p className="p-faq">
                        Q: Berapa banyak Film yang tersedia?
                        <br />
                        <span className="f-span">A: Terdapat banyak film dari berbagai genre sesuai yang Anda inginkan.</span>
                    </p>
                    <p className="p-faq">
                        Q: Apakah Mengakses film tersebut gratis?
                        <br />
                        <span className="f-span">A: Tidak ada biaya yang diminta saat Anda ingin menonton film, cukup like dan support saja web kami.</span>
                    </p>
                </div>
            </StyledFAQ> */}
        </div>
    );
}

export default Body;
