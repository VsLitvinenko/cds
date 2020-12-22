export interface FullStudioInfoInterface {
    studioName: string;
    leader: {
        name: string;
        mainInfo: string;
        fullInfo: string;
        image: string;
    };
    content: {
        header: string;
        body: string[];
    }[];
    imgList: {
        id: string;
        view: string;
    }[];
    contacts: {text: string, logo: string, url?: string }[];
}
