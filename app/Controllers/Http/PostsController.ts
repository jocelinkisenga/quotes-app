 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
const post = new Post()
export default class PostsController {


	async index({view}:HttpContextContract){
		const posts = await Post.all()
		return view.render('blog/index',{posts})
	}

	async create({view}:HttpContextContract){
		return view.render('blog.create_post')
	}

	async store({request, response}:HttpContextContract){
		post.title = request.input('title')
		post.content = request.input('content')
		await post.save()
		
	}
}
