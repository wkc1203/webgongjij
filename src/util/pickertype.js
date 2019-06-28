/* eslint-disable no-unused-expressions */
import { useAxios } from '@hooks/useAxios';
export function pickertype() {
        //学历
        const [Recordformal] = useAxios({
            url: '/dictionarySubitem/queryUser',
            token:true,
            method: 'get',
            request: {
            parentCode:'XLLX'
            }
        })
        let RecordformalList=[]
        Recordformal.code!==1?Recordformal.data.map((v, i) => 
            RecordformalList.push({value:v.code,label:v.name})
        ):''
        console.log(111)
        //证件
        const [certificate] = useAxios({
        url: '/dictionarySubitem/queryUser',
        token:true,
        method: 'get',
        request: {
        parentCode:'ZJLX'
        }
        })
        let certificateList=[]
        certificate.code!==1?certificate.data.map((v, i) => 
        certificateList.push({value:v.code,label:v.name})
        ):''

        //婚姻
        const [marriage] = useAxios({
        url: '/dictionarySubitem/queryUser',
        token:true,
        method: 'get',
        request: {
        parentCode:'HYLX'
        }
        })
        let marriageList=[]
        marriage.code!==1?marriage.data.map((v, i) => 
        marriageList.push({value:v.code,label:v.name})
        ):''


        //民族
        const [national] = useAxios({
        url: '/dictionarySubitem/queryUser',
        token:true,
        method: 'get',
        request: {
        parentCode:'MZLX'
        }
        })
        let nationalList=[]
        national.code!==1?national.data.map((v, i) => 
        nationalList.push({value:v.code,label:v.name})
        ):''

        //职业
        const [professional] = useAxios({
        url: '/dictionarySubitem/queryUser',
        token:true,
        method: 'get',
        request: {
        parentCode:'ZYLX'
        }
        })
        let professionalList=[]
        professional.code!==1?professional.data.map((v, i) => 
        professionalList.push({value:v.code,label:v.name})
        ):''

        //性别
        const [gender] = useAxios({
        url: '/dictionarySubitem/queryUser',
        token:true,
        method: 'get',
        request: {
        parentCode:'XB'
        }
        })
        let genderList=[]
        gender.code!==1?gender.data.map((v, i) => 
        genderList.push({value:v.code,label:v.name})
        ):''

        //国籍
        const [nationality] = useAxios({
        url: '/dictionarySubitem/queryUser',
        token:true,
        method: 'get',
        request: {
        parentCode:'XB'
        }
        })
        let nationalityList=[]
        nationality.code!==1?nationality.data.map((v, i) => 
        nationalityList.push({value:v.code,label:v.name})
        ):''

        //银行
        const [bank] = useAxios({
        url: '/dictionarySubitem/queryUser',
        token:true,
        method: 'get',
        request: {
        parentCode:'YHLX'
        }
        })
        let bankList=[]
        bank.code!==1?bank.data.map((v, i) => 
        bankList.push({value:v.code,label:v.name})
        ):''

        //广告
        const [advertising] = useAxios({
        url: '/dictionarySubitem/queryUser',
        token:true,
        method: 'get',
        request: {
        parentCode:'XB'
        }
        })
        let advertisingList=[]
        advertising.code!==1?advertising.data.map((v, i) => 
        advertisingList.push({value:v.code,label:v.name})
        ):''
        return '11'
}

