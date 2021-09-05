import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
const Home = props => {
    const dates = ["02/09/2021", "03/09/2021", "04/09/2021", "05/09/2021", "06/09/2021", "07/09/2021"];
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input btn btn-success font-12" onClick={onClick} ref={ref}>
            {`Select Custom Dates`}
        </button>
    ));
    const [ind, setInd] = useState(0);
    const menu = [
        {
            date: "02/09/2021",
            data: [
                { name: "Breakfast", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Lunch", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" },
                { name: "Evening Meal", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" },
                { name: "Supper", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" }
            ]

        },
        {
            date: "03/09/2021",
            data: [
                { name: "Breakfast", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" },
                { name: "Lunch", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Evening Meal", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Supper", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" }
            ]
        },
        {
            date: "04/09/2021",
            data: [
                { name: "Breakfast", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Lunch", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Evening Meal", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" },
                { name: "Supper", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" }
            ]
        },
        {
            date: "05/09/2021",
            data: [
                { name: "Breakfast", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" },
                { name: "Lunch", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Evening Meal", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Supper", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" }]
        },
        {
            date: "06/09/2021",
            data: [
                { name: "Breakfast", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Lunch", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" },
                { name: "Evening Meal", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Supper", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" }]
        },
        {
            date: "07/09/2021",
            data: [
                { name: "Breakfast", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" },
                { name: "Lunch", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Evening Meal", item: "Asian beef salad", a: "asian-beef-salad1.jpg", b: "asian-beef-salad2.jpg" },
                { name: "Supper", item: "Beef salad mozzarella", a: "beef-salad-mozzarella1.jpg", b: "beef-salad-mozzarella2.jpg" }]
        }

    ];
    const setSelection = (data) => {
        let s = Array.from({ length: data.length }, (_, idx) => "0");
        return s;
    }
    const [curr, setCurrent] = useState({ date: "02/09/2021", selection: setSelection(menu[0].data) });
    const [food, setFood] = useState(menu[0]);

    const handleCheckedChange = (e, dt) => {

        if (e.target.checked) {
            const temp_state = menu;
            const arr = temp_state.filter((item, i) => item.date === dt);
            setFood(arr[0]);
            setCurrent({ ...curr, date: dt, selection: setSelection(arr[0].data) });
        }
        else {
            setCurrent({ ...curr, date: "", selection: [] });
            setFood(null);
        }

    }
    const handleSwitchchange = (index, checked) => {
        let s = curr.selection;
        if (checked === "0")
            s[index] = "1";
        else
            s[index] = "0";
        setCurrent({ ...curr, selection: s });
    }
    const handleDateChange = (date) => {

        const dt = moment(date).format('DD/MM/YYYY');
        const arr = menu.filter((item, i) => item.date === dt);

        if (arr.length > 0) {

            setStartDate(date);
            setFood(arr[0]);
            setCurrent({ ...curr, date: dt, selection: setSelection(arr[0].data) });
        }
        else {
            setStartDate(date);
            setCurrent({ ...curr, date: "", selection: [] });
            setFood(null);
        }
        //
    }
    return (
        <>
            <div>
                <section className="landlord pt-100">
                    <div className="container" data-aos="fade-up">
                        <h3 className="section-title mb-10" >Choose Your Dishes</h3>
                        <hr className="main-title" />
                        <p className="center "><strong>As per your recommented calorie, choose your dishes from below</strong></p>

                    </div>
                </section>
                <section className="extra-features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6" data-aos="flip-left">
                                <div className="card grey">
                                    <div className="card-body">


                                        {dates.map((x, iii) => {
                                            return (
                                                <div className="custom-control form-control-lg custom-checkbox" ket={`itemkey_${iii}`}>
                                                    <input type="checkbox" className="custom-control-input" id={`exampleCheck1${iii}`} checked={curr.date === x} onChange={(e) => handleCheckedChange(e, x)} />
                                                    <label className={`custom-control-label ${curr.date === x && 'selected-date'}`} htmlFor={`exampleCheck1${iii}`}>{x}</label>
                                                </div>

                                            );
                                        })}
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => handleDateChange(date)}
                                            customInput={<ExampleCustomInput />}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6" data-aos="flip-left">
                                <div className="row">
                                    {
                                        curr.date !== '' && food && food.data ?
                                            food.data.map((x, index) => {
                                                return (
                                                    <div className="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up">
                                                        <div className="card no-border" >
                                                            <h5 className="card-title">{x.name}</h5>
                                                            <img src={`${window.location.origin}/assets/images/items/${curr.selection[index] === "0" ? x.a : x.b}`} className="card-img-top" alt="..." />
                                                            <label htmlFor={`small-radius-switch${index}`} className="react-switch-lbl">

                                                                <Switch
                                                                    checked={curr.selection[index] === "1"}
                                                                    onChange={(e) => handleSwitchchange(index, curr.selection[index])}
                                                                    handleDiameter={28}
                                                                    offColor="#08f"
                                                                    onColor="#0ff"
                                                                    offHandleColor="#0ff"
                                                                    onHandleColor="#08f"
                                                                    height={40}
                                                                    width={70}
                                                                    borderRadius={6}
                                                                    activeBoxShadow="0px 0px 1px 2px #fffc35"
                                                                    uncheckedIcon={
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                                justifyContent: "center",
                                                                                alignItems: "center",
                                                                                height: "100%",
                                                                                fontSize: 18,
                                                                                color: "white",
                                                                                paddingRight: 2
                                                                            }}
                                                                        >
                                                                            B
                                                                        </div>
                                                                    }
                                                                    checkedIcon={
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                                justifyContent: "center",
                                                                                alignItems: "center",
                                                                                height: "100%",
                                                                                fontSize: 18,
                                                                                color: "white",
                                                                                paddingRight: 2
                                                                            }}
                                                                        >
                                                                            A
                                                                        </div>
                                                                    }
                                                                    uncheckedHandleIcon={
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                                justifyContent: "center",
                                                                                alignItems: "center",
                                                                                height: "100%",
                                                                                fontSize: 20
                                                                            }}
                                                                        >
                                                                            A
                                                                        </div>
                                                                    }
                                                                    checkedHandleIcon={
                                                                        <div
                                                                            style={{
                                                                                display: "flex",
                                                                                justifyContent: "center",
                                                                                alignItems: "center",
                                                                                height: "100%",
                                                                                color: "black",
                                                                                fontSize: 18
                                                                            }}
                                                                        >
                                                                            B
                                                                        </div>
                                                                    }
                                                                    className="react-switch"
                                                                    id={`small-radius-switch${index}`}
                                                                />
                                                            </label>
                                                            <div className="card-body">

                                                                <p className="card-text">{x.item}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                );
                                            })

                                            :
                                            <div className="col-lg-12">
                                                <div className="alert alert-danger" role="alert">
                                                    <strong>Sorry!</strong> No dishes found.
                                                </div>

                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-lg-12" style={{ textAlign: "center" }}>
                                <button type="button" className="btn btn-success proceed-btn" name="submitBtn" >Proceed</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}
export default Home;