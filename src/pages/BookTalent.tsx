import CustomCheckbox from "../Components/CustomCheckbox.tsx";
import CustomDate from "../Components/CustomDate.tsx";
import CustomInput from "../Components/CustomInput.tsx";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import CustomTextArea from "../Components/CustomTextArea.tsx";

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }
};

const BookTalent = () => {
  return (
    <div
      className=" flex justify-center items-center"
      style={{
        justifyContent: "center",
        justifyItems: "center",
        background: "#e1eef2",

        width: "100vw",
      }}
    >
      <form onSubmit={handleSubmit}>
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
            <CustomInput
              name="artist name"
              label="Artist You Are Requesting"
              type="text"
            />

            <CustomDate name="Date of event" label="Date" />

            <CustomInput name="start time" label="Start Time" type="text" />

            <CustomInput name="End time" label="End Time" type="text" />

            <CustomInput
              name="Arrival time"
              label="Talent and Arrival Time"
              type="text"
            />

            <CustomInput name="EventName" label="Name of Event" type="text" />

            <CustomInput
              name="feeOffer"
              label="Proposed Offer Fee(s)"
              type="text"
            />

            <div>
              <text className="text-xl">POINT OF CONTACT INFORMATION</text>
              <hr className="border-t border-gray-300 my-4" />
            </div>
            <div className="form-group">
              <label>Name </label>
              <small>(First and Last Name)</small>
              <div className="flex  gap-8">
                <CustomInput name="firstName" label="First Name" type="text" />
                <CustomInput name="lastName" label="LastName" type="text" />
              </div>
            </div>

            <CustomInput name="TitleofBooker" label="Title" type="text" />

            <CustomInput name="Email" label="Email" type="text" />

            <CustomInput
              name="PhoneNumber"
              label="Mobile Phone Number"
              type="text"
            />

            <div>
              <text className="text-xl">COMPANY INFORMATION</text>
              <hr className="border-t border-gray-300 my-4" />
            </div>

            <CustomInput name="CompanyName" label="Company Name" type="text" />

            <CustomInput
              name="CompanyEmail"
              label="Company Email"
              type="text"
            />

            <CustomInput
              name="OfficeAddress"
              label="Office Address"
              type="text"
            />

            <CustomInput
              name="officeMobile"
              label="Office Mobile"
              type="text"
            />

            <div className="flex flex-col gap-1">
              <label>Signatory Name</label>
              <div className="flex gap-8">
                <CustomInput
                  name="SinatoryName"
                  label="First Name"
                  type="text"
                />
                <CustomInput
                  name="SinatoryLastName"
                  label="Last Name"
                  type="text"
                />
              </div>
            </div>

            <CustomInput
              name="SinatoryTitle"
              label="Signatory Title"
              type="text"
            />

            <CustomInput
              name="SinatoryMobile"
              label="Signatory Mobile"
              type="text"
            />

            <div className="flex flex-col gap-2">
              <text className="text-3xl">VENUE INFORMATION</text>
              <hr className="border-t border-gray-300 my-4" />

              <CustomTextArea
                name="nameOfVenue"
                label="Name of Venue(s) + Address(es) "
                smallText="(If more than one, separate w/ commas)"
              />
            </div>

            <CustomInput
              name="totalCapacity"
              label="Capacity"
              type="text"
              smallText="  (If more than one, separate w/ commas)"
            />

            <CustomInput
              name="prefferedAirport"
              label="Closet Preferred Airport"
              type="text"
              smallText=" (City and Airport Code)"
            />

            <div className="flex flex-col justify-start gap-3">
              <text>Type of Event</text>
              <small className="text-gray-500">Check all that apply</small>
              <CustomCheckbox name="rainOrShine" label="Rain or Shine" />
              <CustomCheckbox name="AllAges" label="All Ages" />
              <CustomCheckbox name="AgeRestriction" label="Age Restriction*" />
              <CustomCheckbox
                name="LGBTQ"
                label="LGBTQ+ Pride Event / Festival"
              />
              <CustomCheckbox name="Casino" label="Casino" />
              <CustomCheckbox name="College" label="College" />
              <CustomCheckbox name="ComedyClub" label="Comedy Club" />
              <CustomCheckbox
                name="Concert"
                label="Concert / Live Performance"
              />
              <CustomCheckbox name="Corporate" label="Corporate" />
              <CustomCheckbox name="countyfair" label="County Fair" />
              <CustomCheckbox name="fundRaiser" label="Fundraiser" />
              <CustomCheckbox name="MusicFestival" label="Music Festival" />
              <CustomCheckbox
                name="PrivateEvent"
                label="  Private (Birthday, Wedding, Anniversary, etc.)"
              />
              <div className="flex flex-col gap-3">
                <text>Stage</text>
                <small className="text-gray-500">(Check all that apply)</small>
                <CustomCheckbox name="Indoor" label="Indoor" />
                <CustomCheckbox name="OutDoor" label="OutDoor" />
                <CustomCheckbox name="UncoveredStage" label="Uncovered Stage" />
                <CustomCheckbox name="CoveredStage" label="Covered Stage" />
                <CustomDate name="AnnounceDate" label="Announce Date" />
                <CustomDate name="OnsaleDate" label="On-sale Date" />

                <CustomDate
                  name="LoadinDate"
                  label="Load-In Date "
                  smallText="(i.e: 01/02/2020)"
                />
              </div>
              <CustomInput name="LoadInTime" label="Load-In Time" type="text" />
              <CustomDate
                name="SoundCheckDate"
                label="Soundcheck Date "
                smallText="(i.e: 01/02/2020)"
              />
              <CustomInput
                name="SoundCheckTime"
                label="Soundcheck Time"
                type="text"
              />
              <CustomInput name="DoorsOpen" label="Doors Open" type="text" />
              <CustomInput name="EventStart" label="Event Start" type="text" />
              <CustomInput name="SetTime" label="Set Time(s)" type="text" />
              <div className="flex flex-col">
                <label>Event Ends</label>
                <TimePicker
                  name="EventEnds"
                  format="HH:mm"
                  disableClock={true}
                  className={"w-2"}
                />
              </div>

              <div className="flex flex-col">
                <label>Curfew</label>
                <TimePicker
                  name="Curfew"
                  format="HH:mm"
                  disableClock={true}
                  className={"w-2"}
                />
              </div>
              <div className="flex flex-col">
                <label>Sound Ordinance</label>
                <TimePicker
                  name="soundOrdinance"
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
                    In addition to the Guarantee, purchase provides(check all
                    that apply)
                  </small>
                  <CustomCheckbox name="meetAndGreet" label="Meet and Greet" />
                  <CustomCheckbox
                    name="LightandSoundtechnician"
                    label="Light and/or sound technician"
                  />
                  <CustomCheckbox name="UncoveredStage" label="Sound" />
                  <CustomCheckbox name="UncoveredStage" label="Lights" />
                  <CustomCheckbox
                    name="BacklineEquipment"
                    label="Backline Equipment"
                  />
                  <CustomCheckbox name="Security" label="Security" />
                  <CustomCheckbox name="Stage" label="Stage" />
                  <CustomCheckbox
                    name="Privatedressingroom"
                    label="Private dressing room"
                  />
                  <CustomCheckbox
                    name="Hospitalitybackstage"
                    label="Hospitality backstage"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <CustomInput
                    name="ClosestAirport"
                    label="Closest Airport"
                    type="text"
                    smallText="City + Airport Code"
                  />
                  <CustomInput
                    label="Texh Advance"
                    type="text"
                    name="TexhAdvance"
                  />
                  <CustomInput
                    label="Tech Advance Email"
                    type="text"
                    name="TechAdvanceEmail"
                  />
                  <CustomInput
                    label="Texh Advance Phone Number"
                    type="text"
                    name="TexhAdvancePhoneNumber"
                  />
                  <CustomTextArea
                    name="ExpectationofArtisit"
                    label="Expectation of Artisit"
                    smallText="ie: interviews, VIP meet & greet, promote event on social media, etc."
                  />
                  <CustomTextArea
                    label="Mileage Restrictions"
                    name="MileageRestrictions"
                  />
                </div>
                <text className="text-2xl mt-4">Deposits</text>
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex gap-3 flex-col">
                  <text className="text-sm">Please select one:</text>
                  <div className="flex gap-3 flex-col">
                    <CustomCheckbox
                      name="Initialdeposit100%"
                      label=" Initial deposit 100% if required by Artist"
                    />
                    <CustomCheckbox
                      name="Initialdeposit"
                      label="Initial deposit is expected upon signing the fully executed contract. 50% + Buyouts and Agency Fee"
                    />
                    <CustomCheckbox
                      name="Other"
                      label="Other (Please explain below)"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <CustomInput
                      name="Guarantee"
                      label="Guarantee"
                      type="text"
                    />
                    <CustomInput name="Advance" label="Advance" type="text" />
                  </div>
                  <text className="text-2xl mt-4">This Offer Expires On</text>
                  <hr className="border-t border-gray-300 my-4" />
                  <div className="flex flex-col gap-3">
                    <CustomInput
                      name="DateTimeTimeZone"
                      label="Date + Time + TimeZone"
                      type="text"
                    />
                    <CustomTextArea
                      name="CommentsQuestions"
                      label="Comments / Questions"
                    />
                  </div>
                  <text className="text-2xl mt-4">Signature</text>
                  <hr className="border-t border-gray-300 my-4" />
                  <div className="flex gap-3 flex-col">
                    <text>Please read and agree to the following terms: *</text>
                    <div className="sign flex">
                      <label className="text-sm">
                        <input type="checkbox" name="agreeTerms" />
                        Standard Payment: 50% upon signing, 50% day of event,
                        unless 100% is required by Artist. I understand that
                        once I fill out and submit this form, contract will be
                        sent immediately after Offer is accepted. If this Offer
                        is canceled after Artist has accepted, for anything
                        other reason than Force Majeur, Buyer may be responsible
                        for 50% deposit (90 days out from event) and Full Amount
                        (30 days out from event). I have been given the
                        authority to submit this. This is a formal offer, by
                        signing and submitting this form that I have authorized
                        to submit on behalf of the signator, I am committing to
                        this offer if the Artist and / or Management accepts.
                        This will be followed up by a contract.
                      </label>
                    </div>
                    <div className="flex flex-col gap-3">
                      <CustomInput
                        name="FullNameoftalentBooker"
                        label="Sign Below (Please type your full name) "
                        type="text"
                      />
                      <CustomInput
                        name="EventTitle"
                        label="Title"
                        type="text"
                      />
                      <CustomDate
                        name="BookingDate"
                        label="Date"
                        smallText="(i.e: 01/02/2020)"
                      />
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
      </form>
    </div>
  );
};

export default BookTalent;
