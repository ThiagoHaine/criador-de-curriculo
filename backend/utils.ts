import { Md5 } from "ts-md5";

class Utils{
    public static hashMd5(txt:string){
        return Md5.hashStr(txt);
    }
}

export default Utils;