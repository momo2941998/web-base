export interface IUserInfo {
  contract_code: string,
  company_name: string,
  hotline_alias: string,
  total_hotline_active: number,
}

export interface IHotlineShortInfo {
  hotline: string,
  hotline_type: string,
  hotline_register_time: string,
  hotline_expired_time: string,
}

// export interface IModalFeeDetail {
//   type_fee: string,
//   name_fee: string,
//   register_time: string,
//   expired_time: string,
//   total_call_time: string,
//   used_call_time: string,
//   total_intranet_promotion: string, 
//   used_intranet_promotion: string, 
//   total_offnet_promotion: string,
//   used_offnet_promotion: string,
// }


export enum CDR_TYPE_OPTIONS {
  cuoc_thoai = 'cuoc_thoai',
  cuoc_sms = 'cuoc_sms'
}

export enum CDR_FEE_HOTLINE_TYPE {
  ngoai_mang = "ngoai_mang",
  noi_mang = "noimang",
}

export interface CDR_LOG_HOTLINE {
  hotline: string, // so hotline
  hotline_id: string, // hotline id
  phone: string, // so dich
  start_time: string, // thoi gian bat dau goi
  lasted_time: string, // thoi luong cuoc goi,
  fee: string, // cuoc thoai
  hotline_type: CDR_FEE_HOTLINE_TYPE 
}

export interface LOG_QUANTITY_HOTLINE {
  // hotline: string,
  fee: string,
  // total_noi_mang: string,
  // total_ngoai_mang: string,
  total_time: string,
  used_time: string,
  created_time: string,
  expired_time: string,
}