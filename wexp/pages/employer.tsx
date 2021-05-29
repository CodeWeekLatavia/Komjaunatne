import React from 'react'
import styles from '../styles/Home.module.css'
import boostrap, { Button, Dropdown, Form } from 'react-bootstrap'

enum Jobtype {
    programmer = "programmer",
    designer = "designer",
    cashier = "cashier",
    secretary = "secretary"
}

interface IFormInput {
    name: string;
    age: number;
    jobtype: Jobtype;
  }


function Employer(){
    return (
        <Form>
            <h4>Contact information</h4>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="firstName" required/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control name="surname" required/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" name="age" required/>
            </Form.Group>

            <Form.Group>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <Form.Label>Time zone</Form.Label>
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                        <Dropdown.Item value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</Dropdown.Item>
                        <Dropdown.Item value="-11:00">(GMT -11:00) Midway Island, Samoa</Dropdown.Item>
                        <Dropdown.Item value="-10:00">(GMT -10:00) Hawaii</Dropdown.Item>
                        <Dropdown.Item value="-09:50">(GMT -9:30) Taiohae</Dropdown.Item>
                        <Dropdown.Item value="-09:00">(GMT -9:00) Alaska</Dropdown.Item>
                        <Dropdown.Item value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</Dropdown.Item>
                        <Dropdown.Item value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</Dropdown.Item>
                        <Dropdown.Item value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</Dropdown.Item>
                        <Dropdown.Item value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</Dropdown.Item>
                        <Dropdown.Item value="-04:50">(GMT -4:30) Caracas</Dropdown.Item>
                        <Dropdown.Item value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</Dropdown.Item>
                        <Dropdown.Item value="-03:50">(GMT -3:30) Newfoundland</Dropdown.Item>
                        <Dropdown.Item value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</Dropdown.Item>
                        <Dropdown.Item value="-02:00">(GMT -2:00) Mid-Atlantic</Dropdown.Item>
                        <Dropdown.Item value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</Dropdown.Item>
                        <Dropdown.Item value="+00:00" defaultValue="true">(GMT) Western Europe Time, London, Lisbon, Casablanca</Dropdown.Item>
                        <Dropdown.Item value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</Dropdown.Item>
                        <Dropdown.Item value="+02:00" >(GMT +2:00) Kaliningrad, South Africa</Dropdown.Item>
                        <Dropdown.Item value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</Dropdown.Item>
                        <Dropdown.Item value="+03:50">(GMT +3:30) Tehran</Dropdown.Item>
                        <Dropdown.Item value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</Dropdown.Item>
                        <Dropdown.Item value="+04:50">(GMT +4:30) Kabul</Dropdown.Item>
                        <Dropdown.Item value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</Dropdown.Item>
                        <Dropdown.Item value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</Dropdown.Item>
                        <Dropdown.Item value="+05:75">(GMT +5:45) Kathmandu, Pokhara</Dropdown.Item>
                        <Dropdown.Item value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</Dropdown.Item>
                        <Dropdown.Item value="+06:50">(GMT +6:30) Yangon, Mandalay</Dropdown.Item>
                        <Dropdown.Item value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</Dropdown.Item>
                        <Dropdown.Item value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</Dropdown.Item>
                        <Dropdown.Item value="+08:75">(GMT +8:45) Eucla</Dropdown.Item>
                        <Dropdown.Item value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</Dropdown.Item>
                        <Dropdown.Item value="+09:50">(GMT +9:30) Adelaide, Darwin</Dropdown.Item>
                        <Dropdown.Item value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</Dropdown.Item>
                        <Dropdown.Item value="+10:50">(GMT +10:30) Lord Howe Island</Dropdown.Item>
                        <Dropdown.Item value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</Dropdown.Item>
                        <Dropdown.Item value="+11:50">(GMT +11:30) Norfolk Island</Dropdown.Item>
                        <Dropdown.Item value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</Dropdown.Item>
                        <Dropdown.Item value="+12:75">(GMT +12:45) Chatham Islands</Dropdown.Item>
                        <Dropdown.Item value="+13:00">(GMT +13:00) Apia, Nukualofa</Dropdown.Item>
                        <Dropdown.Item value="+14:00">(GMT +14:00) Line Islands, Tokelau</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>


            <Form.Group>
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="number" name="number" required/>
            </Form.Group>

            <Form.Group>
                
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        <Form.Label>Job Type</Form.Label>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item value="1">Graphics & Design</Dropdown.Item>
                        <Dropdown.Item value="2">Digital Marketing</Dropdown.Item>
                        <Dropdown.Item value="3">Writing & Translation</Dropdown.Item>
                        <Dropdown.Item value="4">Video & Animation</Dropdown.Item>
                        <Dropdown.Item value="5">Music & Audio</Dropdown.Item>
                        <Dropdown.Item value="6">Programming & Tech</Dropdown.Item>
                        <Dropdown.Item value="7">Data</Dropdown.Item>
                        <Dropdown.Item value="8">Business</Dropdown.Item>
                        <Dropdown.Item value="9">Lifestyle</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
export default Employer;