 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {

	async index({view}:HttpContextContract){
		return view.render('blog/index')
	}
}