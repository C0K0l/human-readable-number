module.exports = function toReadable (number) {
    let simple=["zero","one","two","three", "four", "five", "six", "seven","eight","nine"];
    let tens=["ten","eleven","twelve", 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let ten=["twenty","thirty", 'forty','fifty','sixty','seventy','eighty','ninety'];
    let num=""+number;
    let str="";
    if (num.length==1){
      str+=simple[number];
    } else if (num.length==2){
        if (num[0]=="1"){
            str=tens[+num[1]];
        }else{
            str=ten[num[0]-2];
            if (num[1]!=0) str+=" "+simple[num[1]];
        }
    }else if (num.length==3){
        str=simple[num[0]]+" hundred";
      if (num[1]=="1"){
          str+=" "+tens[+num[2]];
      }else if (num[1]=="0"&&num[2]!=0){
          str+=" "+simple[num[2]];
      }else if(num[1]!="0"){
          str+=" "+ten[num[1]-2];
          if (num[2]!=0) str+=" "+simple[num[2]];
      }
    }
    return str;
  }
