import { useState } from "react";

export default function Sayac({ deger }) {
    const [sayi, setSayi] = useState(deger || 0);
    const arttir = () => setSayi(sayi + 1);
    return (
        <button className="btn btn-blue btn-blue:hover m-2" onClick={arttir}>
            Sayı: {sayi}
        </button>
    );
}
