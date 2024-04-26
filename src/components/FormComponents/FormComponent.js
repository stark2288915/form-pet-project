import React from 'react';
import {useForm} from "react-hook-form";
import "./style.css";

const FormComponent = () => {

    let {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        alert("I output your data to the console!");

    }
    return (
        <div className={'formMain'}>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <span className={'titleInput'}>How can one carry water in a sieve?</span>
                    <input {...register("waterQ", {required: true})}/>
                </div>

                <div>
                <span className={'titleInput'}>First Name</span>
                    <input {...register("fName", {required: true})}/>
                </div>

                <div>
                    <span className={'titleInput'}>Email address</span>
                    <input {...register("email", {required: true})}/>
                </div>

                <div>
                    <span className={'titleInput'}>Company / Self-Employed</span>

                    <input type={'checkbox'} value={'Self-Employed'} {...register("SelfCompany", {required: true})}/>
                    <label htmlFor="SelfEmployed">Self-Employed</label> <br/>

                    <input type={'checkbox'} value={'Company'} {...register("SelfCompany", {required: true})}/>
                    <label htmlFor="Company">Company</label> <br/>
                </div>
                <div>
                    <span className={'titleInput'}>Industry</span>
                    <label>
                    <input type={'radio'} value={'RealEstate'} {...register("Industry", {required: true})}/>
                    Real-Estate
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'SocialMedia'} {...register("Industry", {required: true})}/>
                    Social Media
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'HR Consulting'} {...register("Industry", {required: true})}/>
                    HR Consulting
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'Healthcare'} {...register("Industry", {required: true})}/>
                    Healthcare
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'Delivery'} {...register("Industry", {required: true})}/>
                    Delivery
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'Blockchain'} {...register("Industry", {required: true})}/>
                    Blockchain
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'Banking'} {...register("Industry", {required: true})}/>
                    Banking
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'FoodAndBeverage'} {...register("Industry", {required: true})}/>
                    Food and Beverage
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'OnlineStoreMarketplace'} {...register("Industry", {required: true})}/>
                    Online store & Marketplace
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'BeautyFashion'} {...register("Industry", {required: true})}/>
                    Beauty & Fashion
                    </label> <br/>

                    <label>
                    <input type={'radio'} value={'Other'} {...register("Industry", {required: true})}/>
                    Other
                    </label> <br/>


                    {/*<input type={'text'} {...register("Industry", {required: true})}/>*/}


                </div>
                <div className={'wantDevelop'}>
                    <span className={'titleInput'}>What would you like to develop ?</span>

                    <label>
                    <input type={'radio'} value={'Website'} {...register("wantDevelop", {required: true})}/>
                    Website
                    </label>

                    <label>
                    <input type={'radio'} value={'MobileApp'} {...register("wantDevelop", {required: true})}/>
                    Mobile App
                    </label>

                    <label>
                    <input type={'radio'} value={'Product'} {...register("wantDevelop", {required: true})}/>
                    Product
                    </label>

                    <label>
                    <input type={'radio'} value={'MVP'} {...register("wantDevelop", {required: true})}/>
                    MVP
                    </label>

                    <label>
                    <input type={'radio'} value={'AiIntegration'} {...register("wantDevelop", {required: true})}/>
                    AI Integration
                    </label>

                    <label>
                    <input type={'radio'} value={'Other'} {...register("wantDevelop", {required: true})}/>
                        Other
                    {/*<input type={'text'}{...register("wantDevelop")}/>*/}
                    </label>

                    {/*<input type={'text'}{...register("wantDevelop", {required: true})}/>
                    <label htmlFor=""></label>*/}
                </div>

                <div>
                    <span className={'titleInput'}>Brief description of your project:</span>
                    <input {...register("aboutProj", {required: true})}/>
                </div>
                <div>
                    <span className={'titleInput'}>What functional features would you like to include in your product?</span>
                    <input {...register("funcProj", {required: true})}/>
                </div>
                <div>
                    <span className={'titleInput'}>Do you have any design preferences or styles?</span>

                    <select id={'selectDesignList'}
                            {...register("design", { required: true })}>
                        <option value="">Please select</option>
                        <option value="This should be a custom design, I trust the developer.">This should be a custom design, I trust the developer.</option>
                        <option value="Yes, I have preferences - I'll show.">Yes, I have preferences - I'll show.</option>
                        <option value="I want it like these guys - I'll send a link to competitor websites.">I want it like these guys - I'll send a link to competitor websites.</option>
                        <option value="No, I've never dealt with this before.">No, I've never dealt with this before.</option>
                    </select>
                </div>
                <div>
                    <span className={'titleInput'}>What timeline do you expect for the project to be completed?</span>

                    <select id={'selectDeadlineProj'}  {...register("deadlineProj", { required: true })}>
                        <option value="">Please select</option>
                        <option value="Up to one month">Up to one month</option>
                        <option value="From 1 - 3 month">From 1 - 3 month</option>
                        <option value="From 3 - 6 month">From 3 - 6 month</option>
                        <option value="More that year">More that year</option>
                        <option value="Don't know the time frame (you have tell me)">Don't know the time frame (you have tell me)</option>
                    </select>

                </div>
                <div>
                    <span className={'titleInput'}>What budget are you considering for this project?</span>

                    <select id={'selectbudgetProj'}  {...register("budgetProj", { required: true })}>
                        <option value="">Please select</option>
                        <option value="From $1000">From $1000</option>
                        <option value="From $1000 - $5000">From $1000 - $5000</option>
                        <option value="From $5000 - $10000">From $5000 - $10000</option>
                        <option value="From $10000 - $50000">From $10000 - $50000</option>
                        <option value="From $50000 - $100000">From $50000 - $100000</option>
                        <option value="Let's discuss this quickly - I don't know the prices.">Let's discuss this quickly - I don't know the prices.</option>
                    </select>

                </div>

                <div>
                    <span className={'titleInput'}>Are you considering integrating AI into your product?</span>


                    <select id={'selectAiInProj'} {...register("AiInProj", { required: true })}>
                        <option value="">Please select</option>
                        <option value="Yes, why not give it a try!">Yes, why not give it a try!</option>
                        <option value="No, there's no need for that.">No, there's no need for that.</option>
                        <option value="I dont know, I need more information.">I dont know, I need more information.</option>
                    </select>
                </div>
                
                <div>
                    <span className={'titleInput'}>Do you work with the marketing part of your product?</span>

                    <select id={'selectmarketingProj'} {...register("marketingProj", { required: true })}>
                        <option value="">Please select</option>
                        <option value="Yes, we have a well - established strategy and use our own approach.">Yes, we have a well - established strategy and use our own approach.</option>
                        <option value="We effectively promote our brand through SEO optimization.">We effectively promote our brand through SEO optimization.</option>
                        <option value="We engage in cold outreach strategies for marketing.">We engage in cold outreach strategies for marketing.</option>
                        <option value="We have experts in social media marketing (SMM) and targeted advertising.">We have experts in social media marketing (SMM) and targeted advertising.</option>
                        <option value="No, we have never done this before - only word of mouth.">No, we have never done this before - only word of mouth.</option>
                        <option value="We are considering updating our brand promotion strategy.">We are considering updating our brand promotion strategy.</option>
                        <option value="We are considering updating our strategy to increase sales conversions/traffic.">We are considering updating our strategy to increase sales conversions/traffic.</option>
                        <option value="We are looking for an SEO optimization and traffic specialist.">We are looking for an SEO optimization and traffic specialist.</option>
                        <option value="No, there's no need for that.">No, there's no need for that.</option>
                        <option value="I don't know, I need more information.">I don't know, I need more information.</option>
                    </select>
                </div>
                
                
                <div>
                    <span className={'titleInput'}>Share links to competitor websites or those that attract you.</span>
                    <input {...register("linksAttract", {required: true})}/>
                </div>



                <div>
                    <span className={'titleInput'}>How soon are you prepared to begin?</span>

                    <select id={'selectWhenStart'} {...register("marketingProj", { required: true })}>
                        <option value="">Please select</option>
                        <option value="As soon as possible">As soon as possible</option>
                        <option value="Within a months">Within a months</option>
                        <option value="Within 3 months">Within 3 months</option>
                        <option value="Within 6 months">Within 6 months</option>
                        <option value="Within a year">Within a year</option>

                    </select>

                </div>

                <div>

                    <span className={'titleInput'}>Do you prefer chat or call?</span>

                    <label>
                    <input type={'checkbox'} value={'Chat'} {...register("chatOrCall", {required: true})}/>
                    Chat
                    </label> <br/>

                    <label>
                    <input type={'checkbox'} value={'Call'} {...register("chatOrCall", {required: true})}/>
                    Call
                    </label> <br/>

                    <label>
                    <input type={'checkbox'} value={'Both are suitable'} {...register("chatOrCall", {required: true})}/>
                    Both are suitable
                    </label> <br/>
                </div>
                <div>
                    <span className={'titleInput'}>Do you have any specific requirements or requests?</span>
                    <input {...register("requests", {required: true})}/>
                </div>
                <div>
                    <span className={'titleInput'}>Additional Information</span>
                    <input {...register("addInfo", {required: true})}/>
                </div>
                <div className={'buttons'}>
                    <input type="submit" value={'send'}/>
                    <input type="reset" value={'clear form'}/>
                </div>


            </form>
        </div>
    );
};

export {FormComponent};