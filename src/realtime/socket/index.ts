import Vuee from 'vue'
import * as socketIo from 'socket.io';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
export interface Message{

}
export  class Socket {
    private socket:socketIo.Server;
    
    constructor(server?:string){
        this.socket = socketIo(server);
    }


    public send(message: Message): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onEvent(event: string): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}

export default function SocketPlugin(Vue: typeof Vuee,url:string){
    const socket=new Socket(url);
    
    Vue.prototype.$socket = socket;
} 