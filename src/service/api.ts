export {}
// import axios from "axios"
// import { CDR_FEE_HOTLINE_TYPE, IHotlineShortInfo, CDR_LOG_HOTLINE, IUserInfo, LOG_QUANTITY_HOTLINE } from "../types/userInfo"
// import fileDownload from 'js-file-download'

// export const getCustomer = async (token: string) => {
//   console.warn(`send request...`)
//   let url = process.env.REACT_APP_BACKEND + '/customer'
//   // return "abc"
//   let response = await axios({
//     method: 'GET',
//     url,
//     headers: {
//       'Content-type': 'application/json',
//       'token': token
//     },
//   })
//   if (response.data.status !== 200) throw new Error('Not found')
//   let parseResult: Pick<IUserInfo, 'company_name'|'contract_code'|"hotline_alias"> = {
//     company_name: response.data.name,
//     contract_code: response.data.contract_id,
//     hotline_alias: response.data.phone
//   }
//   return parseResult
// }

// export const getHotlines = async (token: string) => {
//   console.warn(`send request...`)
//   let url = process.env.REACT_APP_BACKEND + '/hotlines'
//   // return "abc"
//   let response = await axios({
//     method: 'GET',
//     url,
//     headers: {
//       'Content-type': 'application/json',
//       'token': token
//     },
//   })
//   if (response.data.status !== 200) return []
//   // console.log(response.data.hotlines)
//   // let hotlinesFilter = response.data.hotlines.filter((hotline: any) => {
//   //   return hotline && hotline.phone
//   // })
//   let hotlines: IHotlineShortInfo[] = response.data.hotlines.map((before: any) => {
//     return {
//       hotline: before.phone,
//       hotline_type: "",
//       hotline_register_time: before.created_at,
//       hotline_expired_time: ""
//     }
//   })
//   return hotlines
// }

// export const getLogCDR = async (token:string, start_date: string, end_date: string) => {
//   let url = process.env.REACT_APP_BACKEND + '/calculate_time_detail'
//   let response = await axios({
//     url,
//     method: "POST",
//     headers: {
//       'Content-type': 'application/json',
//       'token': token
//     },
//     data: JSON.stringify({
//       start_date: start_date,
//       end_date: end_date
//     })
//   })
//   if (response.data.status !== 200) return []

//   let returnValue: CDR_LOG_HOTLINE[] = response.data.result_time_detail.map((e: any) => ({
//     hotline: e.hotline,
//     phone: e.phone,
//     hotline_id: e.hotline_id,
//     start_time: e.created_at,
//     lasted_time: e.remain_time,
//     fee: e.money_call,
//     hotline_type: parseInt(e.mnp_phone) === 1 ? CDR_FEE_HOTLINE_TYPE.noi_mang : CDR_FEE_HOTLINE_TYPE.ngoai_mang
//   } as CDR_LOG_HOTLINE))
//   return returnValue
// }

// export const getLogQuantity = async (token: string, datetimeString: string) => {
//   let url = process.env.REACT_APP_BACKEND + '/total_time'
//   let response = await axios({
//     url,
//     method: "GET",
//     headers: {
//       token: token, 
//       datetimeString: datetimeString
//     }
//   })
//   if (response.data.status !== 200) return []
//   let returnValue: LOG_QUANTITY_HOTLINE[] = response.data.total_time_details.map((e: any) => ({
//     fee: e.name,
//     created_time: e.created_at,
//     expired_time: e.expire_date,
//     total_time: e.time_init,
//     used_time: e.time_use
//   } as LOG_QUANTITY_HOTLINE))
//   return returnValue
// }

// export const downloadLogCDR = async (token: string, start_date: string, end_date: string) => {
//   let url = process.env.REACT_APP_BACKEND + '/dowaload_cdr'
//   let response = await axios({
//     url,
//     responseType: 'blob',
//     method: "POST",
//     headers: {
//       'Content-type': 'application/json',
//       'token': token,
//     },
//     data: JSON.stringify({
//       start_date: start_date,
//       end_date: end_date
//     })
//   })
//   fileDownload(response.data, 'data.csv')
// }