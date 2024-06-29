import zipcodes from "zipcodes";

export async function lookup(zipcode: any) {
    const resp = zipcodes.lookup(zipcode);
    if (resp) {
        return { status: 0 }
    } else {
        return { status: 1 }
    }
}