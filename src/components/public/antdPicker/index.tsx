
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { List, InputItem, WhiteSpace ,WingBlank, Picker,Icon,Button} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Center } from '@components/public';
import cs from 'classnames'
import districtData from './address';
import { useAxios } from '@hooks/useAxios';
export type AntdPicker = {
  data?: any,
  placeholder: string,
  labeltext: string,
  getState: (...rest: any) => void,
  Child?: JSX.Element,
  type?: string,
  disabled?: boolean,
  value?: string,
  extra?: string,
  pickertype?:string,
  picker?:boolean,
  rightType?:boolean,
  rightBtntype?:string,
  inputiconright?:string,
  fiedRes?:string,
  onChange?:(...rest: any) => void,
  onFocus?:(...rest: any) => void,
  ImgClick?:(...rest: any) => void,
  
}
const colorStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '16px',
  height: '16px',
  marginRight: '10px',
};

// 家庭月收入
const totalRevenue = [
  {
    label: '0.5万-1万',
    value: '0.5万-1万',
  },
  {
    label: '1万-2万',
    value: '1万-2万',
  },
  {
    label: '2万-3万',
    value: '2万-3万',
  },
  {
    label: '3万-5万',
    value: '3万-5万',
  },
  {
    label: '5万-10万',
    value: '10万-10万',
  },
  {
    label: '10万以上',
    value: '10万以上',
  },
]
// 月收入
const monthlyIncome = [
  {
    label: '2000-3000',
    value: '2000-3000',
  },
  {
    label: '3000-5000',
    value: '3000-5000',
  },
  {
    label: '5000-8000',
    value: '5000-8000',
  },
  {
    label: '8000-10000',
    value: '8000-10000',
  },
  {
    label: '1万以上',
    value: '1万以上',
  },
]
// 亲属关系
const kinship = [
  {
    label: '夫妻',
    value: '夫妻',
  },
  {
    label: '父子',
    value: '父子',
  },
  {
    label: '母女',
    value: '母女',
  },
  {
    label: '子女',
    value: '子女',
  },
  {
    label: '其他',
    value: '其他',
  },
]
// 最高学历
const record = [
  {
    label: '高中',
    value: '高中',
  },
  {
    label: '大专',
    value: '大专',
  },
  {
    label: '本科',
    value: '本科',
  },
  {
    label: '硕士',
    value: '硕士',
  },
  {
    label: '博士',
    value: '博士',
  },
  {
    label: '其他',
    value: '其他',
  },
]
// 婚姻情况

const marriageStatus = [
  {
    label: '已婚',
    value: '已婚',
  },
  {
    label: '未婚',
    value: '未婚',
  },
  {
    label: '其他',
    value: '其他',
  },
]
let once = true;
const axionsData =()=>{
  const [fiedRes] = useAxios({
    url: '/classiFied/appClassiFied',
    method: 'get'
  })
  console.log(fiedRes)
}

// pickertype Mon  月收入 Tot 家庭月收入 Kin 亲属关系 Rec 最高学历 Mar 婚姻情况 areas 区域 rightBtntype 输入框右边类型 (icon btn) rightType 是否展示右边按钮或图片
export const AntdPicker = ({data, getState, labeltext,placeholder, value = ''  }: AntdPicker) => {
  const [num, setNum] = useState({ val: value,labeltext:labeltext,placeholder:placeholder })
  const [picValue, setpicker] = useState()
  const [picmovdata, setMondata] = useState({val:data})
  const [picmov, setMon] = useState({val:data})
  const [yzm, setYzm] = useState('获取验证码')
  const [y, setY] = useState(true)
  useEffect(() => {
    getState(num)
  }, [num])
  useEffect(() => {
    setNum({ val: value,labeltext:labeltext,placeholder:placeholder })
  }, [value])
  let i = 60
  let s = true
  let timer: any = null
  const getYzm = () => {
    if (y) {
      setY(false)
      timer = setInterval(() => {
        if (s) {
          console.log('object')
          setYzm(i + 's')
          i--
          if (i <= 0) {
            clearInterval(timer)
            setYzm('发送失败')
          }
        }else{
          clearInterval(timer)
        }
      }, 1000)
    }
  }
  useEffect(() => {
    
  })
  
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
      
      <div className={style['labelinputs']}>
          <label className={style['labelinputs-label']}>{labeltext}</label>
          <List >
            <Picker
              data={data}
              title={placeholder}
              cols={1}
              extra={" "}
              onChange = {(v)=>{
                console.log(v)
                setpicker(v)
              }}
            >
              <List.Item arrow="horizontal" className = {style['am-list-item-picker']}>{picValue?picValue:placeholder}</List.Item>
            </Picker>
          </List>
        </div>
      </WingBlank>
    </div>
  )
}
