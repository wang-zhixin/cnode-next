export type Tab = '' | 'ask' | 'share' | 'job' | 'good'

/*Author*/
export type Author = {
	loginname: string
	avatar_url: string
}

/*Reply_id*/
export type Reply_id = {}

/*Replies*/
export type Replies = {
	id: string
	author: Author
	content: string
	ups: any
	create_at: string
	reply_id: Reply_id
	is_uped: boolean
}

/*tsModel4*/
export type TopicType = {
	id: string;
	author_id: string;
	tab: string;
	content: string;
	title: string;
	last_reply_at: string;
	good: boolean;
	top: boolean;
	reply_count: number;
	visit_count: number;
	create_at: string;
	author: Author;
	replies: Replies[];
	is_collect: boolean;
}

