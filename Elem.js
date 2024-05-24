export default class Elem{

    #ertek=" "
    #szuloElem;
    #divELEM;
    #id=0;
    constructor(id, ertek, szuloElem){
        this.#ertek = ertek
        this.#szuloElem = szuloElem
        this.#megjelenit()
        this.#id = id;

        // RÁKATTINTUNK AZ ELEMRE

        this.#divELEM = this.#szuloElem.children("div:last-child");
        this.#divELEM.on("click", ()=>{
            if(this.#ertek=== " "){
                this.#esemenyTrigger("lepes");
            }
        })
    }

    #megjelenit(){
        let txt=`<div><p>${this.#ertek}</p></div>`
        this.#szuloElem.append(txt)
    }

    // információ átadás esemény esetén másik osztálynak
    #esemenyTrigger(esemenyNev){
        // létrehoz egy saját eseményt EseményNev néven, átad adatokat saját magáról {detail:}
        const e = new CustomEvent(esemenyNev, {detail:this.#id})
        window.dispatchEvent(e)
    }
}