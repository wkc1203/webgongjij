import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import cs from 'classnames';
import {Flex,Icon} from 'antd-mobile'
import { Navigationt, Inputs, Cutoff, Title, Center, AntdButton } from '@components/public';
import { History } from 'history';
import { validate, sendMessageToNative } from '@util/index';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))
type Gjjc = {
  history: History
}
  
export default ({ history }: Gjjc) => {
    const Block=({text_one,text_two,img}:{text_one:any,text_two:any,img:any})=>(
        <div className={style['container']}>
            <img src={pImgs[img]}  className={style['container_img']}></img>
            <div className={style['one_line']}>{text_one}</div>
            <div className={style['two_line']}>{text_two}</div>
        </div>
    );
    return (
        <div className={style['gjjc']}>
        <Navigationt history={history} title='我的贷款' tbg='ParkingSpace_bg' second />
        <Cutoff hg='20' />
        <Title title='南京银行车位贷' _style='title-color-white'/>
        <Cutoff hg='20' />
        <div className={style['flex-container']}>
        <Flex justify="center">
            <Flex.Item>
                <Block text_one='安全' text_two='银行保障' img='icon_safe'></Block>
            </Flex.Item>
            <Flex.Item>
                <Block text_one='满足' text_two='支持零首付 最高可借30万' img='icon_safe'></Block>
            </Flex.Item>
        </Flex>
        <Cutoff hg='10' />
        <Flex justify="center" className={style['block']}>
            <Flex.Item>
                <Block text_one='方便' text_two='无抵押无担保 全程线上操作' img='icon_safe'></Block>
            </Flex.Item>
            <Flex.Item>
                <Block text_one='快捷' text_two='现场出结果 当天可签约' img='icon_safe'></Block>
            </Flex.Item>
        </Flex>
        <Cutoff hg='20' />
        <Flex justify="center">
            <Flex.Item className={cs(style['text_center'],style['step_title'])}>
                <div><img src={pImgs['icon_font']} className={style['icon_font']}></img>申请前请先确保完成以下步骤<img src={pImgs['icon_font']} className={style['icon_font']}></img></div>
            </Flex.Item>
        </Flex>
        <Cutoff hg='20' />
        <Flex justify="center">
            <Flex.Item className={style['step']}>
                <div>完成申请楼盘的网签查询<Icon type='check-circle-o' className={style['step_icon']}/></div>
            </Flex.Item>
        </Flex>
        <Cutoff hg='20' />
        <Flex justify="center">
            <Flex.Item className={style['step_err']}>
                <div>完成申请城市的公积金查询<Icon type='cross-circle' className={style['step_icon_err']}/></div>
            </Flex.Item>
        </Flex>
        <Cutoff hg='20' />
        <Flex justify="center">
            <Flex.Item className={style['step']}>
                <div>完成个人实名认证流程<Icon type='check-circle-o' className={style['step_icon']}/></div>
            </Flex.Item>
        </Flex>
        </div>
        <Cutoff hg='20' />
        <AntdButton text={"开始申请"}></AntdButton>
        <Cutoff hg='30' />
        <div className={style['flex-container']}>
            <Flex justify="center">
                <Flex.Item className={cs(style['text_center'],style['button_bottom'])}>
                    <div>查看申请进度</div>
                </Flex.Item>
            </Flex>
        </div>
        <Cutoff hg='30' />
        </div>
    )
}
