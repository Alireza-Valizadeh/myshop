export const mustFillRule = (v) => !!v || 'پر کردن این بخش الزامیست';

export const mustFillWithZeroIncludedRule = (v) =>
  !!v || v === 0 || v === '0' || 'پر کردن این بخش الزامیست';

export const mobileLengthRule = (v) =>
  (typeof v === 'string' && v.length === 11) ||
  !v ||
  'شماره موبایل باید 11 رقمی باشد';

export const PhoneNumberRule = (v) =>
  /(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi.test(
    v
  ) ||
  !v ||
  'فرمت شماره موبایل صحیح نیست';

export const emailFormatRule = (v) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
  !v ||
  'فرمت ایمیل وارد شده صحیح نیست';

export const passwordFormatRule = (v) =>
  (!!v &&
    v.length >= 8 &&
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-])/.test(v)) ||
  !v ||
  'گذرواژه باید حداقل 8 کاراکتر و شامل حروف بزرگ و کوچک، عدد و کاراکتر خاص مانند ! باشد';
