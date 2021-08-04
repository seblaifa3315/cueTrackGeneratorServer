const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diverSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
            unique: true,
        },
        supervisor: {
            type: Boolean,
            required: true,
        },
        lead: {
            type: Boolean,
            required: true,
        },
        day: {
            type: Boolean,
            required: true,
        },
        night: {
            type: Boolean,
            required: true,
        },
        hiringYear: {
            type: Number,
            required: true,
        },
        presence: {
            type: Boolean,
            required: true,
        },
        canDive: {
            type: Boolean,
            required: true,
        },
        console: {
            type: Boolean,
            required: true,
        },
        dcr: {
            type: Boolean,
            required: true,
        },
        r1: {
            type: Boolean,
            required: true,
        },
        r2: {
            type: Boolean,
            required: true,
        },
        dcl: {
            type: Boolean,
            required: true,
        },
        l1: {
            type: Boolean,
            required: true,
        },
        l2: {
            type: Boolean,
            required: true,
        },
        fr: {
            type: Boolean,
            required: true,
        },
        fl: {
            type: Boolean,
            required: true,
        },
        deck: {
            type: Boolean,
            required: true,
        },
        numberOfWet: {
            type: Number,
            required: true,
        },
        numberOfDry: {
            type: Number,
            required: true,
        },
        numberOfShow: {
            type: Number,
            required: true,
        },
        numberOfconsole: {
            type: Number,
            required: true,
        },
        numberOfdcr: {
            type: Number,
            required: true,
        },
        numberOfr1: {
            type: Number,
            required: true,
        },
        numberOfr2: {
            type: Number,
            required: true,
        },
        numberOfdcl: {
            type: Number,
            required: true,
        },
        numberOfl1: {
            type: Number,
            required: true,
        },
        numberOfl2: {
            type: Number,
            required: true,
        },
        numberOffr: {
            type: Number,
            required: true,
        },
        numberOffl: {
            type: Number,
            required: true,
        },numberOfdeck: {
            type: Number,
 
        },
        percentOfWet: {
            type: Number,

        },
        percentOfDry: {
            type: Number,

        },
        percentOfShow: {
            type: Number,

        },percentOfconsole: {
            type: Number,

        },percentOfdcr: {
            type: Number,

        },
        percentOfr1: {
            type: Number,

        },
        percentOfr2: {
            type: Number,

        },
        percentOfdcl: {
            type: Number,

        },
        percentOfl1: {
            type: Number,

        },
        percentOfl2: {
            type: Number,

        },
        percentOffr: {
            type: Number,

        },
        percentOffl: {
            type: Number,

        },
        percentOfdeck: {
            type: Number,

        },
        tracksKnown: {
            type: Array,

        },
        tracksUnknown: {
            type: Array,

        },
       
    },
    {
        timestamps: true,
    }
);

const Diver = mongoose.model("Diver", diverSchema);

module.exports = Diver;
