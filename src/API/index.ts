import { classiFied } from './classiFied';
import { consultation } from './consultation';
import { searchHome } from './searchHome';
import { creditCardList } from './creditCardList';
import { queryChoicenessProduct } from './queryChoicenessProduct';
import { wangqiangetdata } from './wangqiangetdata';
import { netSignSave } from './netSignSave';
import { storage } from './storage';
import { bindPhone } from './bindPhone';
import { sendYZM } from './sendYZM';
import { codeLogin } from './codeLogin';
import { gjjSignIn } from './gjjSignIn';
import { gjjObtain } from './gjjObtain';
import { loanApplication } from './loanApplication';
import { queryUser } from './queryUser';
import { queryUserAccessory } from './queryUserAccessory';
import { queryBuildingMsg } from './queryBuildingMsg';
import { querySign } from './querySign';
import { loanSignupdate } from './update';
import { senSms } from './senSms';
import { personIncomes } from './personIncomes';
import { familyIncomes } from './familyIncomes';
import { selectCity } from './selectCity';
import { selectAddress } from './selectAddress';

export interface API {
  '/address/queryAllAddress':selectAddress,
  '/product/pro/queryBuildings':selectCity,
  '/familyIncomes':familyIncomes,
  '/personIncomes':personIncomes,
  '/senSms':senSms,
  '/loanSign/update':loanSignupdate,
  '/loanSign/querySign':querySign,
  '/building/queryBuildingMsg':queryBuildingMsg,
  '/userAccessory/queryUserAccessory':queryUserAccessory,
  '/dictionarySubitem/queryUser':queryUser,
  '/classiFied/appClassiFied': classiFied,
  '/consultation/hotNewsPage': consultation,
  '/search/result': searchHome,
  '/creditCard/cre/queryChoicenessCreditCard': creditCardList,
  '/product/pro/queryChoicenessProduct': queryChoicenessProduct,
  '/wangqiangetdata': wangqiangetdata,
  '/netSign/save': netSignSave,
  '/storage': storage,
  '/bindPhone': bindPhone,
  '/sendYZM': sendYZM,
  '/codeLogin': codeLogin,
  '/userExtend/save': loanApplication,
  '/signIn': gjjSignIn,
  '/obtain': gjjObtain
}