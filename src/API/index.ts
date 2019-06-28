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

export interface API {
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