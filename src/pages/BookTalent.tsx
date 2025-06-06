import CustomCheckbox from "../Components/CustomCheckbox.tsx";
import CustomDate from "../Components/CustomDate.tsx";
import CustomInput from "../Components/CustomInput.tsx";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import CustomTextArea from "../Components/CustomTextArea.tsx";

const BookTalent = () => {
  return (
    <div
      className=" flex justify-center items-center"
      style={{
        height: "100vh",
        justifyContent: "center",
        justifyItems: "center",
        background: "#e1eef2",

        width: "100vw",
      }}
    >
      <div
        className="mt-10 ml-10 mr-10   p-6 border  rounded-lg shadow-sm dark:bg-gray-800 max-h-screen overflow-y-scroll"
        style={{
          width: "50vw",

          background: "#c3e0ea",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="flex justify-center ">
          <text className="text-2xl">Book Talent</text>
        </div>

        <div className="flex flex-col   gap-10">
          <CustomInput label="Artist You Are Requesting" type="text" />

          <CustomDate label="Date" />

          <CustomInput label="Start Time" type="text" />

          <CustomInput label="End Time" type="text" />

          <CustomInput label="Talent and Arrival Time" type="text" />

          <CustomInput label="Name of Event" type="text" />

          <CustomInput label="Proposed Offer Fee(s)" type="text" />

          <div>
            <text className="text-xl">POINT OF CONTACT INFORMATION</text>
            <hr className="border-t border-gray-300 my-4" />
          </div>
          <div className="form-group">
            <label>Name </label>
            <small>(First and Last Name)</small>
            <div className="flex  gap-8">
              <CustomInput label="First Name" type="text" />
              <CustomInput label="LastName" type="text" />
            </div>
          </div>

          <CustomInput label="Title" type="text" />

          <CustomInput label="Email" type="text" />

          <CustomInput label="Mobile Phone Number" type="text" />

          <div>
            <text className="text-xl">COMPANY INFORMATION</text>
            <hr className="border-t border-gray-300 my-4" />
          </div>

          <CustomInput label="Company Name" type="text" />

          <CustomInput label="Company Emai" type="text" />

          <CustomInput label="Office Address" type="text" />

          <CustomInput label="Office Mobile" type="text" />

          <div className="flex flex-col gap-1">
            <label>Signatory Name</label>
            <div className="flex gap-8">
              <CustomInput label="First Name" type="text" />
              <CustomInput label="Last Name" type="text" />
            </div>
          </div>

          <CustomInput label="Signatory Title" type="text" />

          <CustomInput label="Signatory Mobile" type="text" />

          <div className="flex flex-col gap-2">
            <text className="text-3xl">VENUE INFORMATION</text>
            <hr className="border-t border-gray-300 my-4" />

            <CustomTextArea
              label="Name of Venue(s) + Address(es) "
              smallText="(If more than one, separate w/ commas)"
            />
          </div>

          <CustomInput
            label="Capacity"
            type="text"
            smallText="  (If more than one, separate w/ commas)"
          />

          <CustomInput
            label="Closet Preferred Airport"
            type="text"
            smallText=" (City and Airport Code)"
          />

          <div className="flex flex-col justify-start gap-3">
            <text>Type of Event</text>
            <small className="text-gray-500">Check all that apply</small>
            <CustomCheckbox label="Rain or Shine" />
            <CustomCheckbox label="All Ages" />
            <CustomCheckbox label="Age Restriction*" />
            <CustomCheckbox label="LGBTQ+ Pride Event / Festival" />
            <CustomCheckbox label="Casino" />
            <CustomCheckbox label="College" />
            <CustomCheckbox label="Comedy Club" />
            <CustomCheckbox label="Concert / Live Performance" />
            <CustomCheckbox label="Corporate" />
            <CustomCheckbox label="County Fair" />
            <CustomCheckbox label="Fundraiser" />
            <CustomCheckbox label="Music Festival" />
            <CustomCheckbox label="  Private (Birthday, Wedding, Anniversary, etc.)" />
            <div className="flex flex-col gap-3">
              <text>Stage</text>
              <small className="text-gray-500">(Check all that apply)</small>
              <CustomCheckbox label="Indoor" />
              <CustomCheckbox label="OutDoor" />
              <CustomCheckbox label="Uncovered Stage" />
              <CustomCheckbox label="Covered Stage" />
              <CustomDate label="Announce Date" />
              <CustomDate label="On-sale Date" />

              <CustomDate label="Load-In Date " smallText="(i.e: 01/02/2020)" />
            </div>
            <CustomInput label="Load-In Time" type="text" />
            <CustomDate
              label="Soundcheck Date "
              smallText="(i.e: 01/02/2020)"
            />
            <CustomInput label="Soundcheck Time" type="text" />
            <CustomInput label="Doors Open" type="text" />
            <CustomInput label="Event Start" type="text" />
            <CustomInput label="Set Time(s)" type="text" />
            <div className="flex flex-col">
              <label>Event Ends</label>
              <TimePicker
                format="HH:mm"
                disableClock={true}
                className={"w-2"}
              />
            </div>

            <div className="flex flex-col">
              <label>Curfew</label>
              <TimePicker
                format="HH:mm"
                disableClock={true}
                className={"w-2"}
              />
            </div>
            <div className="flex flex-col">
              <label>Sound Ordinance</label>
              <TimePicker
                format="HH:mm"
                disableClock={true}
                className={"w-2"}
              />
            </div>
            <text className="text-2xl mt-4">Terms</text>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex flex-col gap-3">
              <text>Purchase Provides</text>
              <div className="flex flex-col gap-1">
                <small>
                  In addition to the Guarantee, purchase provides(check all that
                  apply)
                </small>
                <CustomCheckbox label="Meet and Greet" />
                <CustomCheckbox label="Light and/or sound technician" />
                <CustomCheckbox label="Sound" />
                <CustomCheckbox label="Lights" />
                <CustomCheckbox label="Backline Equipment" />
                <CustomCheckbox label="Security" />
                <CustomCheckbox label="Stage" />
                <CustomCheckbox label="Private dressing room" />
                <CustomCheckbox label="Hospitality backstage" />
              </div>
              <div className="flex flex-col gap-3">
                <CustomInput
                  label="Closest Airport"
                  type="text"
                  smallText="City + Airport Code"
                />
                <CustomInput label="Texh Advance" type="text" />
                <CustomInput label="Tech Advance Email" type="text" />
                <CustomInput label="Texh Advance Phone Number" type="text" />
                <CustomTextArea
                  label="Expectation of Artisit"
                  smallText="ie: interviews, VIP meet & greet, promote event on social media, etc."
                />
                <CustomTextArea label="Mileage Restrictions" />
              </div>
              <text className="text-2xl mt-4">Deposits</text>
              <hr className="border-t border-gray-300 my-4" />
              <div className="flex gap-3 flex-col">
                <text className="text-sm">Please select one:</text>
                <div className="flex gap-3 flex-col">
                  <CustomCheckbox label=" Initial deposit 100% if required by Artist" />
                  <CustomCheckbox label="Initial deposit is expected upon signing the fully executed contract. 50% + Buyouts and Agency Fee" />
                  <CustomCheckbox label="Other (Please explain below)" />
                </div>
                <div className="flex flex-col gap-3">
                  <CustomInput label="Guarantee" type="text" />
                  <CustomInput label="Advance" type="text" />
                </div>
                <text className="text-2xl mt-4">This Offer Expires On</text>
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex flex-col gap-3">
                  <CustomInput label="Date + Time + TimeZone" type="text" />
                  <CustomTextArea label="Comments / Questions" />
                </div>
                <text className="text-2xl mt-4">Signature</text>
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex gap-3 flex-col">
                  <text>Please read and agree to the following terms: *</text>
                  <div className="sign flex">
                    <label className="text-sm">
                      <input type="checkbox" name="agreeTerms" />
                      Standard Payment: 50% upon signing, 50% day of event,
                      unless 100% is required by Artist. I understand that once
                      I fill out and submit this form, contract will be sent
                      immediately after Offer is accepted. If this Offer is
                      canceled after Artist has accepted, for anything other
                      reason than Force Majeur, Buyer may be responsible for 50%
                      deposit (90 days out from event) and Full Amount (30 days
                      out from event). I have been given the authority to submit
                      this. This is a formal offer, by signing and submitting
                      this form that I have authorized to submit on behalf of
                      the signator, I am committing to this offer if the Artist
                      and / or Management accepts. This will be followed up by a
                      contract.
                    </label>
                  </div>
                  <div className="flex flex-col gap-3">
                    <CustomInput
                      label="Sign Below (Please type your full name) "
                      type="text"
                    />
                    <CustomInput label="Title" type="text" />
                    <CustomDate label="Date " smallText="(i.e: 01/02/2020)" />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white w-32 p-2 mt-3"
                  >
                    Submit
                  </button>
                  <hr className="border-t border-gray-300 my-4 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTalent;
