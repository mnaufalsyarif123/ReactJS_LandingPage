import styled from 'styled-components';

//Home
export const StyledHomeSection = styled.section`
    background-color: #333; /* Warna latar belakang */
    color: #fff; /* Warna teks */
    padding: 80px 0; /* Padding atas dan bawah */
    text-align: center; /* Posisi teks ke tengah */

        .p-home {
        font-size: 16px;
        line-height: 1.5;
        color: #ABABAB;
        width: 48%;
        margin: 0 auto;
    }
`;
export const StyledHomeTitle = styled.h1`
    font-size: 36px; /* Ukuran teks */ /* Ketebalan teks */
    margin-bottom: 8px;
`;

//About
export const StyledAbout = styled.section`
    padding: 50px;
    background-color: #fff7f9;

    .text-p2 {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        text-align: center;
        margin-bottom: 20px;
    }

    .a-container {
        max-width: 800px;
        margin: 0 auto;
    }

    .p-about {
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 20px;
        color: #555;
        text-align: justify;
    }
`;

//Ruangan
export const StyledRuanganSection = styled.section`
    padding: 60px;
    background-color: #fff7f9;

    h2 {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        text-align: center;
        margin-bottom: 50px;
    }

    p {
        text-align: center;
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .card-link {
        flex: 0 1 calc(25% - 20px);
        margin-bottom: 20px;
        display: flex;
        align-items: stretch;
    }

    .card {
        border: 0px solid #ddd;
        box-shadow: 0 5px 8px rgba(0,0,0,0.1);
        border-radius: 5px;
        padding: 20px;
        text-align: center;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        transition: transform 0.3s ease;
    }

    .card.clicked {
        transform: scale(1.1); /* Perbesar card saat diklik */
    }

    .card img {
        max-width: 100%;
        border-radius: 5px;
        transition: all 0.3s ease; /* Animasi transisi */
    }

    .card h2 {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .card p {
        flex-grow: 1;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .btn {
        margin-top: auto;
    }
`;


//Komunitas
export const StyledKomunitasSection = styled.section`
    padding: 60px;
    background-color: #fff7f9;

    h2 {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        text-align: center;
        margin-bottom: 50px;
    }

    p {
        text-align: center;
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .card-link {
        flex: 0 1 calc(25% - 20px);
        margin-bottom: 20px;
        display: flex;
        align-items: stretch;
    }

    .card {
        border: 0px solid #ddd;
        box-shadow: 0 5px 8px rgba(0,0,0,0.1);
        border-radius: 5px;
        padding: 20px;
        text-align: center;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
    }

    .card img {
        max-width: 100%;
        height: 300px; /* Atur tinggi tetap untuk gambar */
        object-fit: contain; /* Pastikan gambar tetap proporsional */
        border-radius: 5px;
    }

    .card h2 {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .card p {
        flex-grow: 1;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .btn {
        margin-top: auto;
    }
`;

export const StyledAlamatSection = styled.section`
    background-color: #333; /* Warna latar belakang */
    font-size: 24px;
    color: #fff; /* Warna teks */
    padding: 80px 0; /* Padding atas dan bawah */
    text-align: center; /* Posisi teks ke tengah */

        .p-alamat {
        font-size: 16px;
        line-height: 1.5;
        color: #ABABAB;
        margin-bottom:
    }
`;

export const StyledFAQ = styled.section`
    padding: 20px;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    
    .text-p2-faq {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        text-align: center;
        margin-bottom: 20px;
    }

    .f-container {
        max-width: 800px;
        margin: 0 auto;
    }

    .p-faq {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 20px;
        color: #555;
    }

    .f-span {
        display: block;
        margin-top: 10px;
        font-size: 16px;
        color: #777;
    }
`;






