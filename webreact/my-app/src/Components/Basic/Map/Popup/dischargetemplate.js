class dischargetemplate{


    dischargepop(name){
        let disInfo = `<div>
                        排放区名称:  ${name} 
                        </div>`
         return disInfo;
    }
}

export default  new dischargetemplate;