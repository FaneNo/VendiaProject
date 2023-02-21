import NavBar from '../view/home';
export default function Patient() {
    return (<>
        <NavBar/>
        <div class="container">
            <div class="box" id="top-left"></div>
            <div class="box" id="top-right-1"></div>
            <div class="box" id="top-right-2"></div>
            <div class="box" id="top-right-3"></div>
            <div class="box" id="bottom-left"></div>
            <div class="box" id="bottom-right"></div>
        </div>
    </> 
    )
}