import format from "date-fns/format";
const getFormattedDate = (dateFormat: string = 'MM/dd/yyyy'): string => format(new Date(), dateFormat )
export default getFormattedDate