// run `node index.js` in the terminal

const { faker } = require('@faker-js/faker');
const { default: axios } = require('axios');
const { customAlphabet } = require('nanoid');
const Chance = require('chance');
const chance = new Chance();
let count = 0;
Array.from({ length: 500 }).forEach(async () => {
  count++;
  const firstName = faker.name.firstName();
  const middleName = faker.name.middleName();
  const lastName = faker.name.lastName();
  const fullName = `${firstName} ${middleName} ${lastName}`;
  const bodyReq = {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    full_name: fullName,
    username: faker.internet.userName(),
    gender: faker.name.gender(),
    email: faker.internet.email(),
    profile_picture: faker.image.avatar(),
    personal_address: faker.address.streetAddress(),
    personal_address_country: faker.address.country(),
    personal_address_country_code: faker.address.countryCode(),
    personal_address_city: faker.address.city(),
    personal_address_state: faker.address.state(),
    personal_address_zip_code: faker.address.zipCode(),
    job_title: faker.name.jobTitle(),
    job_description: faker.name.jobDescriptor(),
    job_type: faker.name.jobType(),
    phone_number: faker.phone.phoneNumber(),
    company_name: faker.company.companyName(),
    company_description: chance.sentence(),
    company_address: faker.address.secondaryAddress(),
    company_country: faker.address.country(),
    company_country_code: faker.address.countryCode(),
    company_zip_code: faker.address.zipCode(),
    company_time_zone: faker.address.timeZone(),
    birthday: chance.birthday({ string: true, american: false }),
  };
  await axios.post('https://0e7f-36-71-83-92.ngrok.io/api/v1/people', bodyReq);
  console.log(count);
  // console.log(JSON.stringify(bodyReq));
});

// console.log(JSON.stringify(bodyReq));
// const nanoid = customAlphabet('abcdef1234567890', 24);
// console.log(nanoid());
