export class User{
    _id?: string;
    socialID?: string;
    name?: string;
    mobile?: string;
    email?: string;
    password?: string;
    type?: string;
    tag?: string;
    authlevel?: string;
    verified?: string;
    institutename?: string;
    institutetype?: string;
    gender?: string;
    location?: string;
    constructor(
        name?: string,
        email?: string,
        tag?: string,
        mobile?: string,
        password?: string,
        type?: string,
        _id?: string,
        socialID?: string,
        verified?: string,
        institutename?: string,
        institutetype?: string,
        gender?: string,
        location?: string,
        authlevel?: string
    ) {
        this._id = _id;
        this.socialID = socialID;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
        this.type = type;
        this.tag = tag;
        this.verified = verified;
        this.institutename = institutename;
        this.institutetype = institutetype;
        this.gender = gender;
        this.location = location;
        this.authlevel = authlevel;
    }
}   