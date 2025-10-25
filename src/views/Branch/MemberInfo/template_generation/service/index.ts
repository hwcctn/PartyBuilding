import MYRequest from "@/service";

export function submitfile (formData:FormData,role:any) {
    const requestUrl = `/${role}/excel`
    return MYRequest.post({
        url: requestUrl,
        data:formData
    })
}