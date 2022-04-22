class SingleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length=0;
    }
    push(el){
        let newNode=new Node(el)
        if(!this.head){
            this.head =newNode
            this.tail=this.head;
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.head) return;
		let current=this.head;
		let tail=current;
		while(current.next){
			tail=current;
			current=current.next;
		}
		this.tail=tail;
		this.tail.next=null;
		
		this.length--;
		if(this.length==0){
			this.head=null;
            this.tail=null;
		}
		return current
    }
	get(el){
		let index=0;
		let current=this.head;
		if(current.data==el) return current;//index;
		let tail=current;
		while(current.next){
			current=current.next;
			if(current.data==el) return current; //index+1;
			index++;
		}
		
		return current.next;
	}
	insert(el,index){
		let newNode=new Node(el);
		if(!this.head){
            this.head =newNode
            this.tail=this.head;
        }else{
			
			let i=0;
			let current=this.head;
			let tail=current;
			let pre=current;
			while(current.next){
				console.log("--",i,index);
				if(i==index){
					let tmp=current;
					current=newNode;
					current.next=tmp;
					let pre=this.get(i-1);
					pre.next=current;
					this.length++;
					return this;
				}
				current=current.next;
				i++;
			}
		}
	}
	remove(index){
		let pre=this.get(index-1);
		let cur=this.get(index);
		let next=this.get(index+1);
		pre.next=next;
		this.length--;
		
		return this;
	}
	print(){
		let tmp=[];
		let current=this.head;
		while(current){
			tmp.push(current.data);
			current=current.next;
		}
		//console.log(tmp);
		return tmp;
	}
	reverse(){
		let node=this.head;
		this.head=this.tail;
		this.tail=node;
		let next;
		let prev=null;
		for(let i=0;i<this.length;i++){
			next=node.next;
			node.next=prev;
			prev=node;
			node=next;
		}
		return this;
	}
    
}
class Node {
    constructor(data,next=null){
        this.data=data,
        this.next=next
    }
}


let tt=new SingleLinkedList();
tt.push(1);
tt.push(2);
tt.push(3);
tt.push(4);
tt.push(5);
tt.push(6);
tt.push(7);
//tt.get(7);
//tt.pop();
//tt.pop();
//tt.push(233);
//tt.push(2334);
console.log(tt);
//tt.print();
//tt.reverse();
//tt.print();
//console.log(tt);
