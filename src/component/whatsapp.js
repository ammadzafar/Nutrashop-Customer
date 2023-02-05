import React, { Component } from 'react'

import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'
import "../assets/css/all.css";

class Whatsapp extends Component {
    render() {
            return <FloatingWhatsApp phone="923238848263" />
    }
}

export default Whatsapp