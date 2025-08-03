
import { faker } from "@faker-js/faker";
export default (user,count,createdByIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.datatype.number(""),
description: faker.datatype.number(""),
expiryDate: faker.datatype.number(""),
limit: faker.datatype.number(""),
redeemedCount: faker.datatype.number(""),
createdBy: createdByIds[i % createdByIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
