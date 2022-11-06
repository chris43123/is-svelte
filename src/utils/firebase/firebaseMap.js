class Student {
    constructor (name, account, timeline ) {
        this.name = name;
        this.account = account;
        this.timeline = timeline;
    }
}

class Subject {
    constructor (code, name, next, required) {
        this.code = code;
        this.name = name;
        this.next = next;
        this.required = required;
    }
}

class Activity {
    constructor (name, area, hours, date, start, end) {
        this.name = name,
        this.area = area,
        this.hours = hours,
        this.date = date,
        this.start = start,
        this.end = end
    }
}

// Firestore data converter
const studentConverter = {
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Student(data.name, data.account, data.timeline);
    }
};

const subjectConverter = {
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Subject(data.code, data.name, data.next, data.required);
    }
};

const activityConverter = {
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Activity(data.name, data.area, data.hours, data.date, data.start, data.end);
    }
};

const converterDocuments = (docs) => {
    let arr = []
    docs.forEach(element => {
        arr.push(element.data())
    });
    return arr
};


export {studentConverter, subjectConverter, activityConverter, converterDocuments};
