export default function HelloWorld(){
       const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1> 
            <img src="./img/th.jpg" width="100%"/>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            {/* <QuoteText/> */}
            <UserCard
                nama="nabila"
                nim="2457301103"
                tanggal={new Date().toLocaleDateString()} 
                usia ="20"
                />
            <UserCard 
                nama="Adudu"
                nim="1234"
                tanggal ={new Date().toLocaleDateString()}
                />
                <UserCard{...propsUserCard}/>

        </div>
    )
}

function GreetingBinjai(){
    return (
        <small> Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div className="card">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>usia: {props.usia}</p>
            
        </div>
    )
}
