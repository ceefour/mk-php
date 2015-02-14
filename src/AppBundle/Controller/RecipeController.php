<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\FOSRestController;
use AppBundle\Entity\Recipe;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route(defaults={"_format": "json"})
 */
class RecipeController extends FOSRestController
{
    /**
     * @Route("/recipes/", name="recipes-index")
     */
    public function indexAction(Request $request)
    {
        if ($request->getMethod() == 'POST') {
            $data = json_decode($request->getContent(), true);

            $recipe = new Recipe();
//            $recipe->setName('Sedap Malam');
//            $recipe->setDescription('Nasi goreng dan seafood');
//            $recipe->setAddress('depan aula barat ITB');
            $recipe->setName($data['name']);
            if (isset($data['description'])) {
                $recipe->setDescription($data['description']);
            }
            if (isset($data['category'])) {
                $recipe->setCategory($data['category']);
            }
            $em = $this->getDoctrine()->getManager();
            $em->persist($recipe);
            $em->flush();
            return new Response('{"message": "Recipe created"}');
        } else {
            $recipeRepo = $this->getDoctrine()->getRepository('AppBundle:Recipe');
            $recipes = $recipeRepo->findAll();
            //$recipes = array( array('name' => 'Hendy') );
            $view = $this->view($recipes, 200);
            return $this->handleView($view);
        }
    }

}
