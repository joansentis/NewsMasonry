export class News {
    private id: any;
    private author: string;
    private title: string;
    private description: string;
    private urlToImage: string;
    private publishedAt: string;

    constructor($id: any, $author: string, $title: string, $description: string, $urlToImage: string, $publishedAt: string) {
        this.id = $id;
        this.author = $author;
        this.title = $title;
        this.description = $description;
        this.urlToImage = $urlToImage;
        this.publishedAt = $publishedAt;
    }

    public get $id(): any {
        return this.id;
    }

    public set $id(value: any) {
        this.id = value;
    }

    public get $author(): string {
        return this.author;
    }

    public set $author(value: string) {
        this.author = value;
    }

    public get $title(): string {
        return this.title;
    }

    public set $title(value: string) {
        this.title = value;
    }

    public get $description(): string {
        return this.description;
    }

    public set $description(value: string) {
        this.description = value;
    }

    public get $urlToImage(): string {
        return this.urlToImage;
    }

    public set $urlToImage(value: string) {
        this.urlToImage = value;
    }

    public get $publishedAt(): string {
        return this.publishedAt;
    }

    public set $publishedAt(value: string) {
        this.publishedAt = value;
    }

}
