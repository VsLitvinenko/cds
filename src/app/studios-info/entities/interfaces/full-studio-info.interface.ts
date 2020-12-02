export interface FullStudioInfoInterface {
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
    imgList: string[];
    contacts: any;
}
