import React from "react"

import Layout from  '../../components/Layout'
import SEO from '../../components/Seo'

import { SectionContactStyle } from './styles'

import IlustraContact from '../../assets/ilustra-contact.png'

export default function Home() {
  return <Layout>
    <SEO title="Get in touch" description="Please provide us with your information and how we can help you, and our team will get back to you with the information your need." lang="en" />
    <SectionContactStyle>
      <div className="container">
        <div className="left">
          <div className="text">
            <h1>Get in touch</h1>
            <p>Please provide us with your information and how we can help you, and our team will get back to you with the information your need.</p>
          </div>
          <img src={IlustraContact} className="image" alt="Image contact"/>
        </div>
        <div className="box-form">
          <h2>Looking for further information or any help?</h2>
          <p>You can use the form below to contact us.</p>
          <form action="">
            <div className="form-group">
              <label htmlFor="">Full name</label>
              <input type="text" placeholder="Your name"/>
            </div>
            <div className="form-group">
              <label htmlFor="">E-mail</label>
              <input type="email" placeholder="Type your e-mail"/>
            </div>
            <div className="form-group">
              <label htmlFor="">Subject matter</label>
              <select name="" id="">
                <option value="" disabled selected>Get a quote</option>
                <option value="opt-01">option  01</option>
                <option value="opt-02">option  02</option>
              </select>
              <input type="text" placeholder="Inform the number of devices and plan of interest" className="input-interest"/>
            </div>
            <div className="form-group">
              <textarea placeholder="How can we help you:"></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Send Message"/>
            </div>
          </form>
        </div>
      </div>
    </SectionContactStyle>
  </Layout>
}
