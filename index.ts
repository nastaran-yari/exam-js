type inputType = {
    inputNumber : Number | String
}

type numberInputType =inputType[];

const numberInput:numberInputType = []

const input = document.querySelector<HTMLInputElement>("#input")
const randomNumberButton = document.querySelector<HTMLButtonElement>("#randomNumber")
const firstPreparationButton = document.querySelector<HTMLButtonElement>("#addList")
const deleteButton = document.querySelector<HTMLButtonElement>("#delete")



randomNumberButton?.addEventListener("click" , (eventn : any) => {
    const randomNumber:number = Math.floor(Math.random() * 100000)
    input!.value = randomNumber.toString()
   
})

firstPreparationButton?.addEventListener("click" , () => {
    const firstPreparation:inputType = {
        inputNumber:input?.value?? " " ,
    }
    numberInput.push(firstPreparation)
})

console.log(numberInput)

deleteButton?.addEventListener("click", () => {
    console.clear()
    input!.value = " "
});

