 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {Post} from 'App/Models/Post'

export default class PostsController {

	async index({view}:HttpContextContract){
		return view.render('blog/index')
	}

	async create({view}:HttpContextContract){
		return view.render('blog.create_post')
	}

	async store({request, response}:HttpContextContract){
		await Post.create({
			title: request.input('title'),
			content:request.input('content')
		})
		return response.route('home')
	}
}
