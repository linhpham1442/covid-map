// const Patient = require('../models/Patient')
// const Point = require('../models/Point')
// const Disease = require('../models/Disease')
// const Event = require('../models/Event')
// const mongoose = require('mongoose')
// const Time = require('../models/Time')

exports.getMap = async(req, res, next) => {
    try {
        const patients = await Patient.findAll();
        const events = await Event.findAll();
        const polygons = await Polygon.findAll();
        // Nói chung là lọc ra danh sách bệnh nhân, danh sách có gnười bệnh từng đến, danh sách vùng cách li
        return res.render("index", {
            success: true,
            count_patient: patients.length,
            count_event: events.length,
            count_polygon: polygons.length,
            patient: patients,
            event: events,
            polygon: polygons,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}