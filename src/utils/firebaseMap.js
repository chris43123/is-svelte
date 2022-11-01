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

export {studentConverter, subjectConverter};
